import Link from 'next/link';
import { blogPosts, contactInfo, products, salesExperts } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';

export default function HomePage() {
  return (
    <div>
      {/* Products Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Products Categories</h2>
            <p>Research peptides, beauty peptides, and fitness peptides for global customers.</p>
          </div>
          <div className="product-wc-grid-list">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="product-wc-card">
                <Link href={`/products/${product.slug}`} className="product-wc-card-img-link">
                  {product.imageUrl ? (
                    <div className="product-wc-card-img-wrap">
                      <img src={product.imageUrl} alt={product.name} className="product-wc-card-img" loading="lazy" />
                    </div>
                  ) : (
                    <div className="product-wc-card-img-placeholder">{product.name[0]}</div>
                  )}
                  <span className="product-cat">{product.category}</span>
                </Link>
                <div className="product-wc-card-body">
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="product-wc-card-title">{product.name}</h3>
                  </Link>
                  <p className="product-wc-card-desc">{product.description}</p>
                </div>
                <div className="product-wc-card-footer">
                  <span className="product-wc-card-price">
                    {product.variants[0]?.price
                      ? `From $${product.variants[0].price.toFixed(2)}`
                      : 'Contact for price'}
                  </span>
                  <AddToCartButton product={product} size="sm" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <Link href="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <h2>What we do</h2>
          </div>
          <div className="grid grid-3">
            <div className="card-flat">
              <h3>Custom Peptide Synthesis</h3>
              <p>
                We manufacture peptides tailored to your exact specifications — including sequence, purity,
                and quantity — for research, pharmaceutical, and biotech applications.
              </p>
            </div>
            <div className="card-flat">
              <h3>Bulk &amp; Catalog Peptide Supply</h3>
              <p>
                We offer a wide range of standard peptides with fast lead times and competitive pricing,
                suitable for bulk procurement and repeat orders.
              </p>
            </div>
            <div className="card-flat">
              <h3>End-to-End Quality Control</h3>
              <p>
                From raw materials to final product, every stage is strictly tested using HPLC and MS.
                Each batch comes with a complete Certificate of Analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div>
              <div className="section-header" style={{ textAlign: 'left' }}>
                <h2>About Us</h2>
                <p>
                  With over 15 years of excellence in peptide production, Henghuang Trading specializes in
                  research peptides, beauty peptides, and fitness peptides. We pride ourselves on
                  innovation, strict quality control, and unparalleled customer service. Our GMP-compliant
                  manufacturing facility enables us to produce custom and bulk peptides with full
                  traceability, ensuring consistent quality and reliability for our global customers.
                </p>
              </div>
            </div>
            <div>
              <div className="contact-card">
                <h3>Contact us</h3>
                <div className="divider" />
                <p>Email: {contactInfo.email}</p>
                <p>Whatsapp: {contactInfo.whatsapp}</p>
                <p>Phone: {contactInfo.phone}</p>
                <div className="divider" />
                <Link href="/quote" className="btn btn-primary">Quote Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-bar-inner">
          <div className="stat-item">
            <strong>320+</strong>
            <span>Satisfied Clients Worldwide</span>
          </div>
          <div className="stat-item">
            <strong>200+</strong>
            <span>Product SKUs</span>
          </div>
          <div className="stat-item">
            <strong>4</strong>
            <span>International Awards</span>
          </div>
          <div className="stat-item">
            <strong>35</strong>
            <span>Countries Served</span>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>News, Trends &amp; Blog</h2>
          </div>
          <div className="grid grid-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                {post.imageUrl && (
                  <div className="blog-img-wrap">
                    <img src={post.imageUrl} alt={post.title} className="blog-img" loading="lazy" />
                  </div>
                )}
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="small muted">{post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Experts */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our sales experts</h2>
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
          <h2>Quote Now</h2>
          <p>Leave your contact information and we will get back to you within one business day.</p>
          <Link href="/quote" className="btn btn-primary">Submit Your Inquiry</Link>
        </div>
      </section>
    </div>
  );
}
