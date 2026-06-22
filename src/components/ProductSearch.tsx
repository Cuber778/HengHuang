'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { products } from '@/data/products';

interface ProductSearchProps {
  initialQuery: string;
}

export default function ProductSearch({ initialQuery }: ProductSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const trimmed = query.trim();
      if (!trimmed) {
        router.push(pathname);
      } else {
        router.push(`/products?q=${encodeURIComponent(trimmed)}`);
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="product-search-wrap">
      <div className="product-search-inner">
        <svg className="product-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          className="product-search-input"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search products"
        />
        {query && (
          <button
            className="product-search-clear"
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <p className="product-search-hint">
        {products.length} products available
      </p>
    </div>
  );
}
