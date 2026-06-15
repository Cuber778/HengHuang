import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section hero">
      <div className="container" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
        <span className="eyebrow">404</span>
        <h1 className="title">Page Not Found</h1>
        <p className="subtitle">The page you are looking for does not exist.</p>
        <Link href="/">
          <button className="btn btn-primary" style={{ marginTop: 24 }}>Back Home</button>
        </Link>
      </div>
    </main>
  );
}
