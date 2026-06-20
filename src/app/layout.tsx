import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Henghuang Trading | Trusted Peptide Supplier in China',
    template: '%s | Henghuang Trading',
  },
  description:
    'Henghuang Trading — GMP-compliant peptide manufacturer specializing in research peptides, beauty peptides, and fitness peptides. Bulk & custom synthesis with full traceability.',
  keywords: ['peptide supplier', 'research peptides', 'custom peptide synthesis', 'China peptide manufacturer', 'HGH', 'Tirzepatide', 'Retatrutide'],
  openGraph: {
    title: 'Henghuang Trading | Trusted Peptide Supplier in China',
    description: 'GMP-compliant peptide manufacturer. Bulk & custom synthesis with full traceability. 15+ years experience.',
    url: 'https://huataipeptide.com',
    siteName: 'Henghuang Trading',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henghuang Trading | Trusted Peptide Supplier in China',
    description: 'GMP-compliant peptide manufacturer. Bulk & custom synthesis.',
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%230d8a72'/><text y='72' x='50' text-anchor='middle' font-size='62' font-family='Arial Black' font-weight='900' fill='white'>H</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <FloatingContact />
        </CartProvider>
      </body>
    </html>
  );
}
