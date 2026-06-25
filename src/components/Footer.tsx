import Link from 'next/link';
import { contactInfo } from '@/data/products';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo-text">
            <img src="/images/company/company-hero.jpg" alt="Henghuang Trading" className="site-logo site-logo-img" />
            Henghuang Trading
          </div>
          <p>
            Trusted peptide supplier in China with 15+ years of experience. GMP-compliant,
            third-party tested, and shipped worldwide.
          </p>
          <p style={{ marginTop: 12 }}>
            Email: {contactInfo.email}<br />
            WhatsApp: {contactInfo.whatsapp}
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/coa">COA</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/quote">Quote Now</Link></li>
          </ul>
        </div>

        <div>
          <h4>Products</h4>
          <ul className="footer-links">
            <li><Link href="/products/retatrutide">Retatrutide</Link></li>
            <li><Link href="/products/tirzepatide">Tirzepatide</Link></li>
            <li><Link href="/products/glow70">GLOW</Link></li>
            <li><Link href="/products/nad-plus">NAD+</Link></li>
            <li><Link href="/products/bpc157tb500">BPC157+TB500</Link></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link href="/quote">Request a Quote</Link></li>
            <li><Link href="/products">Bulk Supply</Link></li>
            <li><Link href="/about">Custom Synthesis</Link></li>
            <li><Link href="/coa">Quality Control</Link></li>
            <li><Link href="/products">Global Shipping</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Henghuang Trading Co., Ltd. All rights reserved.</span>
      </div>
    </footer>
  );
}
