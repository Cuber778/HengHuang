'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { contactInfo } from '@/data/products';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/coa', label: 'COA' },
  { href: '/blog', label: 'Blog' },
  { href: '/quote', label: 'Quote Now' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items, totalItems, subtotal, removeItem } = useCart();

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>Email: {contactInfo.email}</span>
          <span>Whatsapp: {contactInfo.whatsapp}</span>
        </div>
      </div>

      {/* Navigation */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="site-branding">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="/images/company/company-hero.jpg" alt="Henghuang Trading" className="site-logo site-logo-img" />
              <div>
                <div className="site-name">Henghuang Trading</div>
                <div className="site-tagline">Trusted Peptide Supplier in China</div>
              </div>
            </Link>
          </div>

          <nav className="main-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-right">
            {/* Cart button */}
            <button
              className="cart-btn"
              onClick={() => setCartOpen(!cartOpen)}
              aria-label={`Cart, ${totalItems} items`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>

            <Link href="/quote" className="btn btn-primary btn-sm">
              Quote Now
            </Link>
            <button
              className={`hamburger ${mobileOpen ? 'is-open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mini Cart */}
      <div
        className={`mini-cart ${cartOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Shopping cart"
        style={{ right: cartOpen ? 0 : -380 }}
      >
        <div className="mini-cart-header">
          <h3>Shopping Cart</h3>
          <button className="mini-cart-close" onClick={() => setCartOpen(false)} aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mini-cart-body">
          {items.length === 0 ? (
            <p className="mini-cart-empty">Your cart is empty.</p>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="mini-cart-item">
                <div className="mini-cart-item-info">
                  <span className="mini-cart-item-name">{item.product.name}</span>
                  <span className="mini-cart-item-variant">
                    {item.product.variants[item.variantIndex]?.label}
                  </span>
                  <span className="mini-cart-item-qty">Qty: {item.quantity}</span>
                </div>
                <button
                  className="mini-cart-remove"
                  onClick={() => removeItem(item.product.id, item.variantIndex)}
                  aria-label={`Remove ${item.product.name}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="mini-cart-footer">
            <div className="mini-cart-subtotal">
              <span>Subtotal:</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <Link
              href="/cart"
              className="btn btn-primary btn-sm"
              style={{ width: '100%', display: 'block', textAlign: 'center' }}
              onClick={() => setCartOpen(false)}
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
      {cartOpen && <div className="mobile-overlay" onClick={() => setCartOpen(false)} />}

      {/* Mobile drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/cart" onClick={() => setMobileOpen(false)}>
            Cart {totalItems > 0 ? `(${totalItems})` : ''}
          </Link>
          <Link
            href="/quote"
            className="btn btn-primary"
            style={{ marginTop: 16, width: '100%', textAlign: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            Quote Now
          </Link>
        </nav>
      </div>
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
