import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/products';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post ? `${post.title} - Henghuang Trading` : 'Blog' };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <section className="blog-hero-image">
        <img src="/images/homepage/blog-banner.jpg" alt="Blog" />
        <div className="container blog-hero-content">
          <div className="small" style={{ marginBottom: 8, color: 'rgba(255,255,255,0.75)' }}>{post.date}</div>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', margin: 0, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>{post.title}</h1>
          <p style={{ marginTop: 10, color: '#f0f0f0', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{post.excerpt}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          {post.imageUrl && (
            <div style={{ marginBottom: 32 }}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      style={{ width: '100%', borderRadius: 4, border: '1px solid var(--border)' }}
                      loading="lazy"
                    />
            </div>
          )}
          <div style={{ lineHeight: 1.8, fontSize: 16 }}>
            {paragraphs.map((para, i) => {
              if (
                para.startsWith('Understanding Peptides') ||
                para.startsWith('Next-Generation Peptide') ||
                para.startsWith('Peptides in Diagnostics') ||
                para.startsWith('The Future of Peptide') ||
                para.startsWith('August 22') ||
                para.startsWith('Founded with the mission') ||
                para.startsWith('Beyond healthcare') ||
                para.startsWith('Industry experts note') ||
                para.startsWith('As the world seeks') ||
                para.startsWith('In the rapidly evolving') ||
                para.startsWith('Peptides, short chains') ||
                para.startsWith('One of the key areas') ||
                para.startsWith('Beyond therapeutics') ||
                para.startsWith('As biotechnology continues') ||
                para.startsWith('In the realm of modern') ||
                para.startsWith('"Freeze-drying is not just') ||
                para.startsWith('Recent industry reports') ||
                para.startsWith('In response to this trend') ||
                para.startsWith('Analysts note that') ||
                para.startsWith('With continuous technological') ||
                para.startsWith('In the rapidly evolving field')
              ) {
                return <h2 key={i} style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>{para}</h2>;
              }
              return <p key={i} style={{ marginBottom: 16 }}>{para}</p>;
            })}
          </div>

          <div className="divider" style={{ margin: '40px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/blog" className="btn btn-secondary btn-sm">Back to Blog</Link>
            <Link href="/quote" className="btn btn-primary btn-sm">Request a Quote</Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div className="section-header">
              <h2>More from Our Blog</h2>
            </div>
            <div className="grid grid-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                  {p.imageUrl && (
                    <div className="blog-img-wrap" style={{ marginBottom: 16 }}>
                      <img src={p.imageUrl} alt={p.title} className="blog-img" loading="lazy" />
                    </div>
                  )}
                  <div className="small muted" style={{ marginBottom: 8 }}>{p.date}</div>
                  <h3 style={{ fontSize: 17, marginBottom: 8, lineHeight: 1.45 }}>{p.title}</h3>
                  <p style={{ fontSize: 13 }}>{p.excerpt}</p>
                  <span className="small" style={{ color: 'var(--primary)', marginTop: 10, display: 'block' }}>
                    Read More
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
