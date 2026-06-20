'use client';

import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import { contactInfo, products } from '@/data/products';
import { useCart, CartItem } from '@/context/CartContext';
import { COUNTRIES, COUNTRY_BY_CODE } from '@/data/countries';

// Sales reps — one row per receiving mailbox.
// Aligned with the 10 sales cards on /about. Order matches the email checklist.
// Default = Mia Zhang (123456789li828@gmail.com) per business request.
type SalesRep = { name: string; email: string };
const SALES_REPS: SalesRep[] = [
  { name: 'Mia Zhang',     email: '123456789li828@gmail.com' },
  { name: 'Anna Fan',      email: 'huangbobin11@outlook.com' },
  { name: 'Sini Wang',     email: 'shsvvi@outlook.com'       },
  { name: 'Mary Chen',     email: 'dhhzbj@outlook.com'       },
  { name: 'Linda Liu',     email: 'dhhdjzhu@outlook.com'     },
  { name: 'Ruby Wu',       email: 'dhhdai@outlook.com'       },
  { name: 'Joy Yang',      email: 'huangbobo33@outlook.com'  },
  { name: 'Emily Zhou',    email: 'aliviawolfftln@outlook.com' },
  { name: 'David Lin',     email: 'ggaazll@outlook.com'      },
  { name: 'Sophie Tan',    email: 'shsgsgsjjs@outlook.com'   },
];
const DEFAULT_SALES_REP = '123456789li828@gmail.com';

type QuoteForm = typeof emptyForm & {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  specification: string;
  purity: string;
  targetPrice: string;
  destination: string;
  incoterm: string;
  notes: string;
};

type ProductSummary =
  | { mode: 'cart'; items: CartItem[]; subtotal: number; totalItems: number }
  | { mode: 'manual'; product: string; quantity: string; unit: string };

function formatUsd(n: number): string {
  return n > 0 ? `USD ${n.toFixed(2)}` : 'Contact for price';
}

function buildMailto(recipient: string, data: {
  product: ProductSummary;
  form: QuoteForm;
}): { href: string; body: string } {
  const productLines: string[] = [];

  if (data.product.mode === 'cart') {
    productLines.push('Items in cart:');
    data.product.items.forEach((item, i) => {
      const variant = item.product.variants[item.variantIndex];
      const unitPrice = variant?.price ?? 0;
      const lineTotal = unitPrice * item.quantity;
      productLines.push(
        `  ${i + 1}. ${item.product.name} — ${variant?.label ?? 'standard'}`,
      );
      productLines.push(`     Qty: ${item.quantity} × ${formatUsd(unitPrice)} = ${formatUsd(lineTotal)}`);
    });
    productLines.push(`  Subtotal: ${formatUsd(data.product.subtotal)} (${data.product.totalItems} items)`);
  } else {
    productLines.push(`Product: ${data.product.product}`);
    productLines.push(`Spec: ${data.form.specification || '—'}`);
    productLines.push(`Purity: ${data.form.purity || '—'}`);
    productLines.push(`Quantity: ${data.product.quantity} ${data.product.unit}`);
    productLines.push(`Target: ${data.form.targetPrice ? `USD ${data.form.targetPrice}` : '—'}`);
  }
  const lines = [
    'New Quote Inquiry — Henghuang Trading',
    '',
    'Customer',
    `Name — ${data.form.name}`,
    `Company — ${data.form.company}`,
    `Email — ${data.form.email}`,
    `Phone — ${data.form.phone}`,
    `Country — ${COUNTRY_BY_CODE[data.form.country]?.name ?? data.form.country} (${COUNTRY_BY_CODE[data.form.country]?.dialCode ?? '—'})`,
    '',
    'Product',
    ...productLines,
    '',
    'Shipping',
    `Destination — ${data.form.destination || '—'}`,
    `Incoterm — ${data.form.incoterm}`,
    '',
    'Notes',
    data.form.notes ? data.form.notes : '(none)',
    '',
    '— Sent from the Henghuang Trading quote form.',
  ];
  const body = lines.join('\n');

  // Subject
  let subjectSuffix: string;
  if (data.product.mode === 'cart') {
    subjectSuffix = `${data.product.totalItems} item${data.product.totalItems === 1 ? '' : 's'}`;
  } else {
    subjectSuffix = `${data.product.product} — ${data.product.quantity} ${data.product.unit}`;
  }
  const subject = `[Quote] ${subjectSuffix} — ${data.form.company}`;

  const href =
    `mailto:${recipient}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
  return { href, body };
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through */
  }
  // Fallback for non-secure contexts (e.g. http://localhost)
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  specification: '',
  purity: '',
  quantity: '',
  unit: 'g',
  targetPrice: '',
  destination: '',
  incoterm: 'FOB',
  notes: '',
  consent: false,
  website: '',
};

export default function QuoteForm() {
  const cart = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]?.name ?? '');
  const [selectedRep, setSelectedRep] = useState(DEFAULT_SALES_REP);

  const [form, setForm] = useState(emptyForm);
  const [errorMsg, setErrorMsg] = useState('');
  const [copyStatus, setCopyStatus] = useState<'ok' | 'fail' | null>(null);

  const useCartMode = cart.items.length > 0;

  const summary: ProductSummary = useMemo(
    () =>
      useCartMode
        ? {
            mode: 'cart',
            items: cart.items,
            subtotal: cart.subtotal,
            totalItems: cart.totalItems,
          }
        : {
            mode: 'manual',
            product: selectedProduct,
            quantity: form.quantity,
            unit: form.unit,
          },
    [
      useCartMode,
      cart.items,
      cart.subtotal,
      cart.totalItems,
      selectedProduct,
      form.quantity,
      form.unit,
    ],
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');
    setCopyStatus(null);

    // Honeypot
    if (form.website.trim() !== '') {
      return;
    }
    if (!form.consent) {
      setErrorMsg('Please confirm you agree to be contacted.');
      return;
    }
    const required: Array<[string, string]> = [
      ['name', form.name],
      ['company', form.company],
      ['email', form.email],
      ['phone', form.phone],
      ['country', form.country],
    ];
    for (const [k, v] of required) {
      if (!v.trim()) {
        setErrorMsg(`Please fill in: ${k}`);
        return;
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!useCartMode && !form.quantity.trim()) {
      setErrorMsg('Please fill in: quantity');
      return;
    }
    if (useCartMode && cart.items.length === 0) {
      // shouldn't happen — useCartMode guards against this
      setErrorMsg('Your cart is empty. Add a product first or fill in product details below.');
      return;
    }

    setSubmitting(true);
    const { href, body } = buildMailto(selectedRep, {
      product: summary,
      form,
    });

    // Open the user's mail client with everything pre-filled.
    // We use location.href (not window.open) so it works the same on desktop + mobile.
    window.location.href = href;

    // Copy the same text to clipboard as a safety net —
    // user can paste into WhatsApp, webmail, or any other channel.
    const copied = await copyToClipboard(body);
    setCopyStatus(copied ? 'ok' : 'fail');
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="submitted-wrap">
        <div className="submitted-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22,4 12,14.01 9,11.01" />
          </svg>
        </div>
        <h2>Email Opened — Please Hit Send</h2>
        <p>
          Your mail client should have opened with the inquiry pre-filled to{' '}
          <strong>{selectedRep}</strong>. Click <strong>Send</strong> there to deliver it. We&apos;ll
          reply within <strong>1 business day</strong>.
        </p>

        <div style={{ margin: '14px auto', maxWidth: 420 }}>
          <label htmlFor="qf-sales-rep-2" className="small muted" style={{ display: 'block', marginBottom: 4 }}>
            Wrong recipient? Send to a different rep instead:
          </label>
          <select
            id="qf-sales-rep-2"
            className="select"
            value={selectedRep}
            onChange={(e) => setSelectedRep(e.target.value)}
          >
            {SALES_REPS.map((rep) => (
              <option key={rep.email} value={rep.email}>
                {rep.name} — {rep.email}
              </option>
            ))}
          </select>
        </div>

        {copyStatus === 'ok' && (
          <div
            className="small"
            style={{
              margin: '12px 0',
              padding: '10px 12px',
              borderRadius: 6,
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              color: '#065f46',
            }}
          >
            <strong>Copied to clipboard</strong> — the same message is also on your clipboard.
            Paste it into WhatsApp, webmail, or any channel if you prefer.
          </div>
        )}
        {copyStatus === 'fail' && (
          <div
            className="small"
            style={{
              margin: '12px 0',
              padding: '10px 12px',
              borderRadius: 6,
              background: '#fffbeb',
              border: '1px solid #fde68a',
              color: '#92400e',
            }}
          >
            Your email client has the full inquiry. If it didn&apos;t open, please email us directly at{' '}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
          </div>
        )}

        <div className="submitted-contact">
          <p className="small muted">If the email didn’t open, you can reach us directly:</p>
          <p>Email: {contactInfo.email}</p>
          <p>WhatsApp: {contactInfo.whatsapp}</p>
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={async () => {
              const { body, href } = buildMailto(selectedRep, {
                product: summary,
                form,
              });
              const ok = await copyToClipboard(body);
              setCopyStatus(ok ? 'ok' : 'fail');
              window.location.href = href;
            }}
          >
            Open Email Again
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={async () => {
              const { body } = buildMailto(selectedRep, {
                product: summary,
                form,
              });
              const ok = await copyToClipboard(body);
              setCopyStatus(ok ? 'ok' : 'fail');
            }}
          >
            Re-copy Message
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setSubmitted(false);
              setErrorMsg('');
              setCopyStatus(null);
              setForm({ ...emptyForm });
            }}
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from humans, bots auto-fill it. Must remain empty. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <label htmlFor="qf-website">Website</label>
        <input
          id="qf-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      {/* ── Section 1: Your Information ── */}
      <div
        className="form-section"
        style={{
          background: '#f8fafc',
          borderRadius: 8,
          padding: '14px 18px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3 className="form-section-title" style={{ marginBottom: 10 }}>
          <span className="form-section-title-num">0</span>
          Send Inquiry To
        </h3>
        <div className="form-row">
          <select
            id="qf-sales-rep"
            className="select"
            name="selectedRep"
            value={selectedRep}
            onChange={(e) => setSelectedRep(e.target.value)}
            required
          >
            {SALES_REPS.map((rep) => (
              <option key={rep.email} value={rep.email}>
                {rep.name} — {rep.email}
              </option>
            ))}
          </select>
          <span className="hint">
            Pick the sales rep you want to reach. Defaults to our primary contact if you don’t choose.
          </span>
        </div>
      </div>

      <div className="form-section">
        <h3 className="form-section-title">
          <span className="form-section-title-num">1</span>
          Your Information
        </h3>

        <div className="form-grid">
          <div className="form-row">
            <label htmlFor="qf-name">
              Full Name<span className="req">*</span>
            </label>
            <input
              id="qf-name"
              className="field"
              name="name"
              placeholder="John Smith"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="qf-company">
              Company<span className="req">*</span>
            </label>
            <input
              id="qf-company"
              className="field"
              name="company"
              placeholder="Your company name"
              value={form.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="qf-email">
              Email<span className="req">*</span>
            </label>
            <input
              id="qf-email"
              className="field"
              name="email"
              type="email"
              placeholder="name@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="qf-phone">
              Phone / WhatsApp<span className="req">*</span>
            </label>
            <div className="qf-phone-wrap">
              <span className="qf-phone-prefix" aria-hidden="true">
                {COUNTRY_BY_CODE[form.country]?.dialCode ?? '+'}
              </span>
              <input
                id="qf-phone"
                className="field"
                name="phone"
                inputMode="tel"
                placeholder={
                  COUNTRY_BY_CODE[form.country]?.dialCode
                    ? `${COUNTRY_BY_CODE[form.country].dialCode} 555 0100`
                    : '+1 555 0100'
                }
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <p className="form-row-hint">
              The country dial code is added automatically when you choose a country below.
            </p>
          </div>

          <div className="form-row" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="qf-country">
              Country / Region<span className="req">*</span>
            </label>
            <select
              id="qf-country"
              className="select"
              name="country"
              value={form.country}
              onChange={(e) => {
                const newCountry = e.target.value;
                const newDial = COUNTRY_BY_CODE[newCountry]?.dialCode;
                setForm((prev) => {
                  if (!newDial) return { ...prev, country: newCountry };
                  // Strip any existing country-code prefix (e.g. "+54", "+86")
                  // from wherever it appears in the phone string, then prepend the new one.
                  const stripped = prev.phone.replace(/^\+\d{1,4}\s*/, '').trim();
                  const nextPhone = `${newDial} ${stripped}`.trim();
                  return { ...prev, country: newCountry, phone: nextPhone };
                });
              }}
              required
            >
              <option value="" disabled>
                — Select your country —
              </option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag}  {c.name}  ({c.dialCode})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Section 2: Product Inquiry ── */}
      <div className="form-section">
        <h3 className="form-section-title">
          <span className="form-section-title-num">2</span>
          Product Requirements
        </h3>

        {useCartMode ? (
          <CartItemsBlock summary={summary as Extract<ProductSummary, { mode: 'cart' }>} />
        ) : (
          <ManualProductBlock
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            form={form}
            handleChange={handleChange}
          />
        )}

        <div className="form-row" style={{ gridColumn: '1 / -1', marginTop: 8 }}>
          <label htmlFor="qf-spec">Specification / CAS</label>
          <input
            id="qf-spec"
            className="field"
            name="specification"
            placeholder={
              useCartMode
                ? 'Optional — applies to all items (e.g. ≥99% purity)'
                : 'e.g. 10mg/vial, 99% purity'
            }
            value={form.specification}
            onChange={handleChange}
          />
        </div>

        <div className="form-grid">
          {useCartMode ? null : (
            <div className="form-row">
              <label htmlFor="qf-purity">Required Purity</label>
              <select
                id="qf-purity"
                className="select"
                name="purity"
                value={form.purity}
                onChange={handleChange}
              >
                <option value="">Select purity…</option>
                <option value="≥98%">≥98%</option>
                <option value="≥99%">≥99%</option>
                <option value="≥99.5%">≥99.5%</option>
                <option value="GMP grade">GMP grade</option>
              </select>
            </div>
          )}

          <div className="form-row">
            <label htmlFor="qf-target">Target Price (USD)</label>
            <input
              id="qf-target"
              className="field"
              name="targetPrice"
              type="text"
              placeholder="Optional"
              value={form.targetPrice}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* ── Section 3: Shipping & Notes ── */}
      <div className="form-section">
        <h3 className="form-section-title">
          <span className="form-section-title-num">3</span>
          Shipping & Notes
        </h3>

        <div className="form-grid">
          <div className="form-row">
            <label htmlFor="qf-dest">Destination Port / City</label>
            <input
              id="qf-dest"
              className="field"
              name="destination"
              placeholder="e.g. Los Angeles, USA"
              value={form.destination}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="qf-inco">Incoterm</label>
            <select
              id="qf-inco"
              className="select"
              name="incoterm"
              value={form.incoterm}
              onChange={handleChange}
            >
              <option value="EXW">EXW</option>
              <option value="FOB">FOB</option>
              <option value="CIF">CIF</option>
              <option value="DDP">DDP</option>
            </select>
          </div>

          <div className="form-row" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="qf-notes">Additional Notes</label>
            <textarea
              id="qf-notes"
              className="textarea"
              name="notes"
              rows={4}
              placeholder="Custom sequence, packaging requirements, delivery timeline, certification needs (COA, MSDS, GMP), etc."
              value={form.notes}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <label className="form-consent">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
        />
        <span>
          I agree to be contacted regarding this inquiry. We never share your
          information with third parties.
        </span>
      </label>

      {errorMsg && (
        <div
          role="alert"
          style={{
            marginTop: 12,
            padding: '10px 12px',
            borderRadius: 6,
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#991b1b',
            fontSize: 14,
          }}
        >
          {errorMsg}
        </div>
      )}

      <button
        className="btn btn-primary btn-submit"
        type="submit"
        disabled={submitting || !form.consent}
      >
        {submitting ? (
          'Submitting…'
        ) : (
          <>
            Send Inquiry
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Sub-components for Section 2 (Product Requirements)
// ─────────────────────────────────────────────────────────────────────

function CartItemsBlock({
  summary,
}: {
  summary: Extract<ProductSummary, { mode: 'cart' }>;
}) {
  const { items, subtotal, totalItems } = summary;
  return (
    <div style={{ gridColumn: '1 / -1', marginBottom: 8 }}>
      <div
        style={{
          padding: '4px 10px',
          marginBottom: 12,
          background: '#ecfeff',
          border: '1px solid #a5f3fc',
          borderRadius: 6,
          color: '#0e7490',
          fontSize: 13,
          display: 'inline-block',
        }}
      >
        Using {totalItems} item{totalItems === 1 ? '' : 's'} from your cart.
      </div>
      <div
        style={{
          border: '1px solid #e2e8f0',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '44px 1fr 90px 80px',
            gap: 10,
            padding: '10px 12px',
            background: '#f8fafc',
            fontSize: 12,
            fontWeight: 600,
            color: '#475569',
            textTransform: 'uppercase',
            letterSpacing: 0.3,
          }}
        >
          <span></span>
          <span>Product</span>
          <span style={{ textAlign: 'right' }}>Qty</span>
          <span style={{ textAlign: 'right' }}>Line Total</span>
        </div>
        {items.map((item, idx) => {
          const variant = item.product.variants[item.variantIndex];
          const unitPrice = variant?.price ?? 0;
          const lineTotal = unitPrice * item.quantity;
          return (
            <div
              key={`${item.product.id}-${item.variantIndex}-${idx}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '44px 1fr 90px 80px',
                gap: 10,
                padding: '10px 12px',
                borderTop: '1px solid #f1f5f9',
                alignItems: 'center',
                fontSize: 14,
              }}
            >
              <span>
                {item.product.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    style={{
                      width: 36,
                      height: 36,
                      objectFit: 'cover',
                      borderRadius: 4,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      background: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748b',
                      fontWeight: 700,
                    }}
                  >
                    {item.product.name[0]}
                  </div>
                )}
              </span>
              <span>
                <strong style={{ display: 'block', color: '#0f172a' }}>
                  {item.product.name}
                </strong>
                <span style={{ fontSize: 12, color: '#64748b' }}>
                  {variant?.label}
                  {unitPrice > 0 ? ` · ${formatUsd(unitPrice)} ea.` : ''}
                </span>
              </span>
              <span style={{ textAlign: 'right', fontWeight: 500 }}>
                × {item.quantity}
              </span>
              <span style={{ textAlign: 'right', fontWeight: 600 }}>
                {formatUsd(lineTotal)}
              </span>
            </div>
          );
        })}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 14px',
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          <span>Estimated Subtotal</span>
          <span>{formatUsd(subtotal)}</span>
        </div>
      </div>
      <div style={{ marginTop: 10, fontSize: 13 }}>
        <Link
          href="/cart"
          style={{ color: 'var(--primary)', textDecoration: 'underline' }}
        >
          Edit quantities in cart →
        </Link>
      </div>
    </div>
  );
}

function ManualProductBlock({
  selectedProduct,
  setSelectedProduct,
  form,
  handleChange,
}: {
  selectedProduct: string;
  setSelectedProduct: (v: string) => void;
  form: QuoteForm;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
}) {
  const selected = products.find((p) => p.name === selectedProduct);
  return (
    <div className="form-grid">
      <div className="form-row" style={{ gridColumn: '1 / -1' }}>
        <label htmlFor="qf-product">
          Product<span className="req">*</span>
        </label>
        <select
          id="qf-product"
          className="select"
          name="selectedProduct"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          required
        >
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name} — {product.category}
            </option>
          ))}
        </select>
        {selected?.tagline && (
          <span className="hint">{selected.tagline.split('|')[0].trim()}</span>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="qf-qty">
          Quantity<span className="req">*</span>
        </label>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            id="qf-qty"
            className="field"
            name="quantity"
            type="number"
            min="1"
            placeholder="e.g. 100"
            value={form.quantity}
            onChange={handleChange}
            required
            style={{ flex: 1 }}
          />
          <select
            className="select"
            name="unit"
            value={form.unit}
            onChange={handleChange}
            style={{ width: 88, flexShrink: 0 }}
          >
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="vial">vial</option>
            <option value="box">box</option>
          </select>
        </div>
      </div>
    </div>
  );
}
