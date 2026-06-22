import Link from 'next/link';
import { products } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';
import ProductSearch from '@/components/ProductSearch';

export const metadata = {
  title: 'Products - Henghuang Trading',
};

const PAGE_SIZE = 8;

function normalize(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const { page: pageParam, q } = await searchParams;

  const filtered = q
    ? products.filter((p) => normalize(p.name).includes(normalize(q)))
    : products;

  const page = Math.max(1, parseInt(pageParam || '1', 10));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(start, start + PAGE_SIZE);

  const buildUrl = (p: number) => {
    const base = '/products';
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (p > 1) params.set('page', String(p));
    const qs = params.toString();
    return qs ? `${base}?${qs}` : base;
  };

  const pages: (number | '...')[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (safePage > 3) pages.push('...');
    for (
      let i = Math.max(2, safePage - 1);
      i <= Math.min(totalPages - 1, safePage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (safePage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Products</h1>
          <p>Research peptides, beauty peptides, and fitness peptides for global customers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductSearch initialQuery={q || ''} />

          {paginated.length === 0 ? (
            <div className="product-search-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <p>No products found for &quot;{q}&quot;</p>
              <Link href="/products" className="product-search-empty-link">
                Clear search
              </Link>
            </div>
          ) : (
            <>
              {q && (
                <p className="product-search-result">
                  {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &quot;{q}&quot;
                </p>
              )}
              <div className="product-wc-grid-list">
                {paginated.map((product) => (
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
                        <h2 className="product-wc-card-title">{product.name}</h2>
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

              <nav className="pagination" aria-label="Products pagination">
                <Link
                  href={buildUrl(safePage - 1)}
                  className="pagination-btn pagination-prev"
                  aria-label="Previous page"
                  style={
                    safePage === 1
                      ? { pointerEvents: 'none', opacity: 0.4 }
                      : undefined
                  }
                  tabIndex={safePage === 1 ? -1 : undefined}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6" />
                  </svg>
                </Link>

                {pages.map((p, idx) =>
                  p === '...' ? (
                    <span key={`ellipsis-${idx}`} className="pagination-ellipsis">
                      &hellip;
                    </span>
                  ) : (
                    <Link
                      key={p}
                      href={buildUrl(p)}
                      className={`pagination-page ${safePage === p ? 'active' : ''}`}
                      aria-label={`Page ${p}`}
                      aria-current={safePage === p ? 'page' : undefined}
                    >
                      {p}
                    </Link>
                  )
                )}

                <Link
                  href={buildUrl(safePage + 1)}
                  className="pagination-btn pagination-next"
                  aria-label="Next page"
                  style={
                    safePage === totalPages
                      ? { pointerEvents: 'none', opacity: 0.4 }
                      : undefined
                  }
                  tabIndex={safePage === totalPages ? -1 : undefined}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6" />
                  </svg>
                </Link>
              </nav>

              <p className="product-search-count">
                {q
                  ? `Showing ${start + 1}–${Math.min(start + PAGE_SIZE, filtered.length)} of ${filtered.length} products`
                  : `Showing ${start + 1}–${Math.min(start + PAGE_SIZE, filtered.length)} of ${filtered.length} products`}
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
