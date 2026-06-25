import Link from 'next/link';
import { contactInfo, products } from '@/data/products';
import QuoteForm from '@/components/QuoteForm';
import PaymentMethods from '@/components/PaymentMethods';

export const metadata = {
  title: 'Get a Quote — Henghuang Trading',
};

const STEPS = [
  { num: 1, label: 'Your Info' },
  { num: 2, label: 'Product Details' },
  { num: 3, label: 'Review & Submit' },
];

const HOW_IT_WORKS = [
  {
    title: 'Sales reviews your inquiry',
    desc: 'Within 1 business day our sales team reviews your requirements.',
  },
  {
    title: 'We confirm specs & MOQ',
    desc: 'Purity, format, MOQ, and production lead time are confirmed.',
  },
  {
    title: 'Shipping & payment options',
    desc: 'You receive shipping methods and accepted payment options.',
  },
  {
    title: 'COA shared for approval',
    desc: 'COA and testing details are shared for your approval before shipment.',
  },
];

export default function QuotePage() {
  const featured = products.slice(0, 4);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="quote-hero">
        <img src="/images/homepage/promo-banner.jpg" alt="" />
        <div className="container">
          <h1>Get a Quote</h1>
          <p>
            Tell us what you need — our sales team replies within{' '}
            <strong style={{ color: 'var(--primary)' }}>1 business day</strong> with
            pricing, lead time, and full COA documentation.
          </p>
          <div className="quote-hero-btns">
            <a href="#inquiry-form" className="btn btn-primary">
              Start Your Inquiry
            </a>
            <Link href="/about" className="btn btn-secondary">
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* ── Step progress bar ── */}
          <div className="step-bar">
            {STEPS.map((step) => (
              <div key={step.num} className="step active">
                <div className="step-dot">{step.num}</div>
                <div className="step-label">{step.label}</div>
              </div>
            ))}
          </div>

          {/* ── 2-col layout ── */}
          <div className="grid grid-2" id="inquiry-form">
            {/* LEFT — Form */}
            <div className="form-wrap">
              <QuoteForm />
            </div>

            {/* RIGHT — Sidebar */}
            <aside>
              {/* Popular products */}
              <div className="side-card">
                <h2>Popular Peptides</h2>
                {featured.map((p) => (
                  <div key={p.id} className="product-mini-card">
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="product-mini-img"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="product-mini-img"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          color: 'var(--muted)',
                        }}
                      >
                        {p.name[0]}
                      </div>
                    )}
                    <div>
                      <strong>{p.name}</strong>
                      <span className="small muted">
                        {p.tagline.split('|')[0].trim()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick contact */}
              <div className="side-card">
                <h2>Quick Contact</h2>
                <div className="side-contact-row">
                  <div className="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="label">Email</span>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </div>
                <div className="side-contact-row">
                  <div className="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="label">WhatsApp</span>
                    <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="side-contact-row">
                  <div className="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="label">Phone</span>
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                </div>
                <div className="side-contact-row">
                  <div className="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <span className="label">Reply Time</span>
                    <strong>Within 24 hours</strong>
                  </div>
                </div>
              </div>

              {/* How it works */}
              <div className="side-card">
                <h2>How It Works</h2>
                <ol className="step-list">
                  {HOW_IT_WORKS.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}</strong>
                      {item.desc}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Payment methods */}
              <div className="side-card">
                <h2>Accepted Payment Methods</h2>
                <PaymentMethods />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
