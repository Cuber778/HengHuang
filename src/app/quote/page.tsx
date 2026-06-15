import Link from 'next/link';
import { contactInfo, products } from '@/data/products';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Quote Now - Henghuang Trading',
};

export default function QuotePage() {
  const featured = products.slice(0, 4);

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Quote Now</h1>
          <p>Leave your contact information and we will reply within one working day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="form-wrap">
            <h2 style={{ marginTop: 0 }}>Inquiry Form</h2>
            <QuoteForm />
          </div>

          <div>
            <div className="detail-section">
              <h2>Popular Products</h2>
              {featured.map((p) => (
                <div key={p.id} className="product-mini-card">
                  {p.imageUrl ? (
                    <img src={p.imageUrl} alt={p.name} className="product-mini-img" loading="lazy" />
                  ) : null}
                  <div>
                    <strong>{p.name}</strong>
                    <span className="small muted">{p.tagline.split('|')[0].trim()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="detail-section">
              <h2>Contact us</h2>
              <p>Email: {contactInfo.email}</p>
              <p>WhatsApp: {contactInfo.whatsapp}</p>
              <p>Phone: {contactInfo.phone}</p>
            </div>

            <div className="detail-section">
              <h2>What Happens Next</h2>
              <ol className="detail-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>1</span>
                  <span>Sales team reviews your requirements within one business day</span>
                </li>
                <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 12 }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>2</span>
                  <span>We confirm purity, format, MOQ, and production lead time</span>
                </li>
                <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 12 }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>3</span>
                  <span>Shipping method and payment options are provided</span>
                </li>
                <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 12 }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>4</span>
                  <span>COA and testing details shared for your approval</span>
                </li>
              </ol>
            </div>

            <div className="detail-section">
              <h2>Accepted Payment Methods</h2>
              <div className="payment-methods">
                {['Bitcoin', 'USDT / USDC', 'Wise', 'T/T Bank Transfer', 'PayPal'].map((method) => (
                  <span key={method} className="payment-tag">{method}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
