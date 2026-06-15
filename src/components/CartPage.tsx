'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, totalItems, subtotal, removeItem, updateQty, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main>
        <section className="page-header">
          <div className="container">
            <h1>Shopping Cart</h1>
            <p>Your cart is currently empty.</p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: 16, marginBottom: 24 }}>Discover our high-purity peptides and add items to your cart.</p>
            <Link href="/products" className="btn btn-primary">Browse Products</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cart-layout">
            <div className="cart-items">
              <div className="cart-table-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>

              {items.map((item, idx) => {
                const variant = item.product.variants[item.variantIndex];
                const unitPrice = variant?.price ?? 0;
                const lineTotal = unitPrice * item.quantity;

                return (
                  <div key={idx} className="cart-item">
                    <div className="cart-item-product">
                      {item.product.imageUrl ? (
                        <img src={item.product.imageUrl} alt={item.product.name} className="cart-item-img" />
                      ) : (
                        <div className="cart-item-img-placeholder">{item.product.name[0]}</div>
                      )}
                      <div className="cart-item-info">
                        <Link href={`/products/${item.product.slug}`} className="cart-item-name">
                          {item.product.name}
                        </Link>
                        <span className="cart-item-variant">{variant?.label}</span>
                      </div>
                    </div>

                    <div className="cart-item-price">
                      {unitPrice > 0 ? `$${unitPrice.toFixed(2)}` : 'Contact for price'}
                    </div>

                    <div className="cart-item-qty">
                      <div className="qty-control">
                        <button
                          onClick={() => updateQty(item.product.id, item.variantIndex, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          &minus;
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.product.id, item.variantIndex, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-total">
                      {unitPrice > 0 ? `$${lineTotal.toFixed(2)}` : '—'}
                    </div>

                    <button
                      className="cart-item-remove"
                      onClick={() => removeItem(item.product.id, item.variantIndex)}
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  </div>
                );
              })}

              <div className="cart-actions">
                <Link href="/products" className="btn btn-secondary btn-sm">Continue Shopping</Link>
                <button
                  className="btn btn-sm"
                  style={{ color: '#999', border: '1px solid #ddd', background: '#fff' }}
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="cart-totals">
              <h2>Cart Totals</h2>
              <div className="cart-totals-row">
                <span>Subtotal ({totalItems} items)</span>
                <span>{subtotal > 0 ? `$${subtotal.toFixed(2)}` : 'Contact for price'}</span>
              </div>
              <div className="cart-totals-row cart-totals-total">
                <span>Total</span>
                <span>{subtotal > 0 ? `$${subtotal.toFixed(2)}` : 'Contact for price'}</span>
              </div>
              <Link
                href="/quote"
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                Proceed to Checkout
              </Link>
              <p className="cart-note">
                Final price will be confirmed by our sales team. Shipping &amp; payment details will be provided after your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
