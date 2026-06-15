'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface Props {
  product: Product;
  initialVariantIndex?: number;
  onClose: () => void;
}

export default function AddToCartModal({ product, initialVariantIndex = 0, onClose }: Props) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(initialVariantIndex);
  const [quantity, setQuantity] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const variant = product.variants[selectedVariant];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleConfirm = () => {
    addItem(product, selectedVariant, quantity);
    setConfirmed(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="atcm-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="atcm-modal">
        <button className="atcm-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="atcm-header">
          <h3 className="atcm-title">Add to Cart</h3>
          <p className="atcm-product-name">{product.name}</p>
        </div>

        {confirmed ? (
          <div className="atcm-confirmed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="40" height="40">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <p>Added to cart!</p>
          </div>
        ) : (
          <>
            <div className="atcm-body">
              <div className="atcm-row">
                <label htmlFor="atcm-variant">FORMAT:</label>
                <select
                  id="atcm-variant"
                  className="select"
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(Number(e.target.value))}
                >
                  {product.variants.map((v, i) => (
                    <option key={i} value={i}>
                      {v.label}{v.price != null ? ` — $${v.price}` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="atcm-row">
                <label htmlFor="atcm-qty">QTY:</label>
                <div className="atcm-qty-control">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
                  <input
                    id="atcm-qty"
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <button onClick={() => setQuantity((q) => Math.min(99, q + 1))}>+</button>
                </div>
              </div>

              <div className="atcm-total">
                <span>Total:</span>
                <span className="atcm-total-price">
                  {variant?.price != null
                    ? `$${(variant.price * quantity).toFixed(2)}`
                    : 'Contact for price'}
                </span>
              </div>
            </div>

            <div className="atcm-footer">
              <button className="btn btn-outline atcm-cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary atcm-confirm" onClick={handleConfirm}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
