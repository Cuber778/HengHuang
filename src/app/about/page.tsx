import Link from 'next/link';
import Image from 'next/image';
import { salesExperts, contactInfo } from '@/data/products';

export const metadata = {
  title: 'About Us - Henghuang Trading',
};

const whatWeDoItems = [
  {
    eyebrow: 'What We Do',
    title: 'Custom Peptide Synthesis',
    text: 'We manufacture peptides tailored to your exact specifications — including sequence, purity, and quantity — for research, pharmaceutical, and biotech applications.',
  },
  {
    eyebrow: 'Supply',
    title: 'Bulk & Catalog Peptide Supply',
    text: 'We offer a wide range of standard peptides with fast lead times and competitive pricing, suitable for bulk procurement and repeat orders.',
  },
  {
    eyebrow: 'Quality Control',
    title: 'End-to-End Testing',
    text: 'Every stage is strictly tested using HPLC and MS. Each batch comes with a complete Certificate of Analysis, including third-party verification when required.',
  },
  {
    eyebrow: 'Global Reach',
    title: 'Trusted Worldwide',
    text: 'Serving 35 countries with responsive logistics, flexible payment options, multilingual sales support, and long-term client partnerships.',
  },
];

const certifications = [
  {
    name: 'GMP Compliant',
    desc: 'Good Manufacturing Practice certified production facility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
  },
  {
    name: 'Third-Party Tested',
    desc: 'Random batch testing by Janoshik laboratory',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    name: 'HPLC & MS Verified',
    desc: 'Every batch verified via HPLC and Mass Spectrometry',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    name: 'ISO Standards',
    desc: 'International quality management standards',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      'The purity and consistency of Henghuang Trading products are outstanding. Our research team has relied on them for three years now.',
    name: 'Dr. James R.',
    role: 'Research Director, Biotech Lab',
  },
  {
    quote:
      'Fast shipping, excellent communication, and products that deliver exactly what they promise. Highly recommended.',
    name: 'Sarah K.',
    role: 'Pharmaceutical Procurement',
  },
  {
    quote:
      "We have tried several suppliers and Henghuang is by far the most reliable. The COA documentation is thorough and professional.",
    name: 'Marco T.',
    role: 'Clinical Research Associate',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section className="page-header about-hero-image">
        <img src="/images/company/company-hero.png" alt="Henghuang Trading company" />
        <div className="container about-hero-content">
          <h1>About Us</h1>
          <p>
            15+ years of peptide manufacturing excellence. GMP-compliant, third-party tested, and trusted by
            researchers worldwide.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div>
              <div className="section-header" style={{ textAlign: 'left' }}>
                <h2>Our Story</h2>
              </div>
              <div style={{ lineHeight: 1.8, color: 'var(--muted)', fontSize: 15 }}>
                <p style={{ marginBottom: 16 }}>
                  Founded over 15 years ago, Henghuang Trading has grown from a small research laboratory into a
                  leading peptide manufacturing company serving researchers, pharmaceutical companies, and biotech
                  firms across 35 countries.
                </p>
                <p style={{ marginBottom: 16 }}>
                  Our state-of-the-art manufacturing facility in China combines advanced synthesis technology with
                  rigorous quality control protocols. Every peptide we produce undergoes multiple rounds of HPLC
                  and Mass Spectrometry testing to ensure it meets our exact specifications.
                </p>
                <p style={{ marginBottom: 16 }}>
                  We specialize in both catalog peptides — available for fast delivery — and custom synthesis
                  services where we manufacture peptides to your precise sequence, purity, and quantity
                  requirements.
                </p>
                <p>
                  Our commitment to quality, transparency, and customer success has earned us the trust of over
                  320 satisfied clients worldwide. Whether you need a single batch for a pilot study or a
                  large-scale supply for ongoing research, we have the capability and dedication to support your
                  work.
                </p>
              </div>
            </div>

            <div>
              <div className="contact-card">
                <h3>Get in Touch</h3>
                <div className="divider" />
                <p>Email: {contactInfo.email}</p>
                <p>WhatsApp: {contactInfo.whatsapp}</p>
                <p>Phone: {contactInfo.phone}</p>
                <div className="divider" />
                <p className="small muted">Response within 1 business day</p>
                <Link
                  href="/quote"
                  className="btn btn-primary"
                  style={{ width: '100%', textAlign: 'center', marginTop: 8, display: 'block' }}
                >
                  Request a Quote
                </Link>
              </div>

              {/* Certifications */}
              <div style={{ marginTop: 24 }}>
                <h3 style={{ fontSize: 16, marginBottom: 14 }}>Certifications &amp; Quality</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {certifications.map((cert) => (
                    <div key={cert.name} className="cert-item">
                      <div className="cert-icon">{cert.icon}</div>
                      <div>
                        <strong style={{ fontSize: 14 }}>{cert.name}</strong>
                        <p className="small muted" style={{ margin: 0 }}>{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
          </div>
          <div className="grid grid-2" style={{ gap: 24 }}>
            {whatWeDoItems.map((item) => (
              <div key={item.title} className="card-flat">
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  {item.eyebrow}
                </span>
                <h3 style={{ fontSize: 18, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Meet the Team</h2>
            <p>Our experienced sales and support professionals are ready to assist you.</p>
          </div>
          <div className="team-grid">
            {salesExperts.map((expert) => (
              <div key={expert.name} className="team-card">
                {expert.imageUrl ? (
                  <img src={expert.imageUrl} alt={expert.name} />
                ) : (
                  <div className="team-avatar">{expert.name[0]}</div>
                )}
                <div className="team-card-info">
                  <strong>{expert.name}</strong>
                  <span>{expert.role}</span>
                  <div className="team-card-contacts">
                    <a href={`https://wa.me/${expert.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                    <a href={`mailto:${expert.email}`} title="Email">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5.003H21.52zM24 19H0V5.777l11.6 8.153V19z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact our team for pricing, custom synthesis, or bulk orders.</p>
          <Link href="/quote" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>
    </main>
  );
}
