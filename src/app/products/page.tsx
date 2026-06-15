import Link from 'next/link';
import { products } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';

export const metadata = {
  title: 'Products - Henghuang Trading',
};

export default function ProductsPage() {
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
          <div className="product-wc-grid-list">
            {products.map((product) => (
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
        </div>
      </section>
    </main>
  );
}
