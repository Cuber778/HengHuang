import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'COA',
  description: 'Certificate of Analysis for Henghuang Trading peptide products.',
};

const coaImages = [
  { src: '/images/coa/WechatIMG173.jpg', alt: 'Certificate of Analysis 1' },
  { src: '/images/coa/WechatIMG174.jpg', alt: 'Certificate of Analysis 2' },
  { src: '/images/coa/WechatIMG176.jpg', alt: 'Certificate of Analysis 3' },
  { src: '/images/coa/WechatIMG177.jpg', alt: 'Certificate of Analysis 4' },
  { src: '/images/coa/WechatIMG178.jpg', alt: 'Certificate of Analysis 5' },
  { src: '/images/coa/WechatIMG179.jpg', alt: 'Certificate of Analysis 6' },
  { src: '/images/coa/WechatIMG180.jpg', alt: 'Certificate of Analysis 7' },
];

export default function COAPage() {
  return (
    <>
      <section className="coa-hero-image">
        <img src="/images/homepage/coa-banner.jpg" alt="COA" />
        <div className="container coa-hero-content">
          <h1>Certificate of Analysis (COA)</h1>
          <p>Verified quality certificates for our peptide products.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="coa-grid">
            {coaImages.map((img, idx) => (
              <div key={idx} className="coa-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={1100}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
