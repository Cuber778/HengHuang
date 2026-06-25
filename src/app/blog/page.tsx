import Link from 'next/link';
import { blogPosts } from '@/data/products';

export const metadata = {
  title: 'Blog - Henghuang Trading',
};

export default function BlogPage() {
  return (
    <main>
      <section className="blog-hero-image">
        <img src="/images/homepage/blog-banner.jpg" alt="Blog" />
        <div className="container blog-hero-content">
          <h1>News, Trends &amp; Blog</h1>
          <p>Insights and updates from the peptide and biotechnology industry.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 28 }}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ display: 'block' }}>
                {post.imageUrl && (
                  <div className="blog-img-wrap" style={{ marginBottom: 16 }}>
                    <img src={post.imageUrl} alt={post.title} className="blog-img" loading="lazy" />
                  </div>
                )}
                <div className="small muted" style={{ marginBottom: 8 }}>{post.date}</div>
                <h3 style={{ fontSize: 20, marginBottom: 10, lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: 14 }}>{post.excerpt}</p>
                <span className="small" style={{ color: 'var(--primary)', marginTop: 12, display: 'block' }}>
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
