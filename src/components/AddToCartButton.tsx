'use client';

import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface Props {
  product: Product;
  variantIndex?: number;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export default function AddToCartButton({ product, variantIndex = 0, size = 'md', style }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, variantIndex, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      className={`btn btn-primary ${size === 'sm' ? 'btn-sm' : ''} atc-btn ${added ? 'added' : ''}`}
      onClick={handleAdd}
      style={style}
    >
      {added ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={size === 'sm' ? 12 : 16} height={size === 'sm' ? 12 : 16}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Added!
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size === 'sm' ? 12 : 16} height={size === 'sm' ? 12 : 16}>
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Add to Cart
        </>
      )}
    </button>
  );
}
