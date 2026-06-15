'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'faq'>('description');
  const { addItem, totalItems } = useCart();

  const variant = product.variants[selectedVariant];
  const unitPrice = variant?.price ?? 0;
  const lineTotal = unitPrice * quantity;

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="product-wc-grid">
            {/* Left: Image */}
            <div className="product-wc-gallery">
              {variant?.imageUrl ? (
                <img
                  src={variant.imageUrl}
                  alt={variant.label}
                  className="product-wc-main-img"
                  loading="eager"
                />
              ) : product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-wc-main-img"
                  loading="eager"
                />
              ) : (
                <div className="product-wc-img-placeholder">
                  <span>{product.name}</span>
                </div>
              )}
            </div>

            {/* Right: Summary */}
            <div className="product-wc-summary">
              <h1 className="product-wc-title">{product.name}</h1>
              <p className="product-wc-short-desc">{product.description}</p>

              {/* Format selector */}
              <div className="product-wc-variants">
                <label htmlFor="variant-select">FORMAT:</label>
                <select
                  id="variant-select"
                  className="select product-wc-select"
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(Number(e.target.value))}
                >
                  {product.variants.map((v, i) => (
                    <option key={i} value={i}>{v.label}</option>
                  ))}
                </select>
              </div>

              {/* Price display */}
              <div className="product-wc-price-row">
                <span className="product-wc-unit-price">
                  {unitPrice > 0 ? `$${unitPrice.toFixed(2)} / unit` : 'Contact for price'}
                </span>
              </div>

              {/* Quantity selector */}
              <div className="product-wc-qty-row">
                <label>QTY:</label>
                <div className="qty-control product-wc-qty-control">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((q) => Math.min(99, q + 1))} aria-label="Increase">+</button>
                </div>
              </div>

              {/* Total price */}
              {unitPrice > 0 && (
                <div className="product-wc-line-total">
                  <span>Total:</span>
                  <span className="product-wc-line-total-price">${lineTotal.toFixed(2)}</span>
                </div>
              )}

              {/* Action row: Add to Cart + View Cart */}
              <div className="product-wc-action-row">
                <button
                  className={`btn btn-primary product-wc-atc ${added ? 'added' : ''}`}
                  onClick={handleAddToCart}
                >
                  {added ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                      </svg>
                      Add to Cart
                    </>
                  )}
                </button>
                <Link href="/cart" className="btn btn-secondary product-wc-view-cart">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  View Cart{totalItems > 0 ? ` (${totalItems})` : ''}
                </Link>
              </div>

              <div className="product-wc-badges">
                <span className="product-wc-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <path d="M9 12l2 2 4-4"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  </svg>
                  GMP Compliant
                </span>
                <span className="product-wc-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                  </svg>
                  ≥99% Purity
                </span>
                <span className="product-wc-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <rect x="1" y="3" width="15" height="13"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                  Global Shipping
                </span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="product-wc-tabs">
            <div className="product-wc-tab-bar" role="tablist">
              <button
                role="tab"
                aria-selected={activeTab === 'description'}
                className={`product-wc-tab ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'additional'}
                className={`product-wc-tab ${activeTab === 'additional' ? 'active' : ''}`}
                onClick={() => setActiveTab('additional')}
              >
                Additional information
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'faq'}
                className={`product-wc-tab ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => setActiveTab('faq')}
              >
                Reviews
              </button>
            </div>

            <div className="product-wc-tab-content" role="tabpanel">
              {activeTab === 'description' && (
                <div className="product-wc-description">
                  <p className="product-wc-overview">{product.overview}</p>

                  {product.keyBenefits.length > 0 && (
                    <div className="product-wc-section">
                      <h3>Key Benefits</h3>
                      <ul>
                        {product.keyBenefits.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                  )}

                  {product.reconstitutionInstructions.length > 0 && (
                    <div className="product-wc-section">
                      <h3>Reconstitution Instructions</h3>
                      <ol>
                        {product.reconstitutionInstructions.map((r, i) => <li key={i}>{r}</li>)}
                      </ol>
                    </div>
                  )}

                  {product.dosingGuidelines.length > 0 && (
                    <div className="product-wc-section">
                      <h3>Dosing Guidelines</h3>
                      <ol>
                        {product.dosingGuidelines.map((d, i) => <li key={i}>{d}</li>)}
                      </ol>
                    </div>
                  )}

                  {product.note && (
                    <div className="product-wc-section">
                      <h3>Product Note</h3>
                      <p>{product.note}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'additional' && (
                <div className="product-wc-additional">
                  <table className="product-wc-attr-table">
                    <tbody>
                      <tr>
                        <th>Product Name</th>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <th>Category</th>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <th>Purity</th>
                        <td>≥99% (HPLC)</td>
                      </tr>
                      <tr>
                        <th>Form</th>
                        <td>Lyophilized Powder</td>
                      </tr>
                      <tr>
                        <th>Storage</th>
                        <td>Store at -20°C. Refrigerate after reconstitution. Use within 90 days.</td>
                      </tr>
                      {variant && (
                        <tr>
                          <th>FORMAT</th>
                          <td>{variant.label}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="product-wc-faq">
                  {product.faqs.length > 0 ? (
                    product.faqs.map((faq, i) => (
                      <div key={i} className="faq-accordion-item">
                        <h4 className="faq-question">{faq.q}</h4>
                        <p className="faq-answer">{faq.a}</p>
                      </div>
                    ))
                  ) : (
                    <div className="faq-accordion-item">
                      <h4 className="faq-question">What Carrier Oil/solvents are used for your injectables?</h4>
                      <p className="faq-answer">USP Grade MCT oil is the carrier oil. The only solvents used are Benzyl Alcohol & Benzyl Benzoate (BA & BB).</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
