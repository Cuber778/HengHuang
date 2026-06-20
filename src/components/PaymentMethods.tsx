'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { contactInfo } from '@/data/products';

type CryptoEntry = (typeof contactInfo.crypto)[keyof typeof contactInfo.crypto];

function buildUri(entry: CryptoEntry): string {
  if (entry.label.startsWith('Bitcoin')) {
    return `bitcoin:${entry.address}`;
  }
  if (entry.label.startsWith('USDT')) {
    return `ethereum:${entry.address}@eip155:1/erc20:0xdAC17F958D2ee523a2206206994597C13D831ec7`;
  }
  return entry.address;
}

function shortenAddress(addr: string, head = 8, tail = 6): string {
  if (addr.length <= head + tail + 3) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}

function CryptoCard({ entry }: { entry: CryptoEntry }) {
  const [copied, setCopied] = useState(false);
  const uri = buildUri(entry);
  const hasStaticQr = entry.qrImages.length > 0;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(entry.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="crypto-card">
      <div className="crypto-card-head">
        <div>
          <h3 className="crypto-card-title">{entry.label}</h3>
          <span className="crypto-card-net">Network: {entry.network}</span>
        </div>
      </div>

      <div className="crypto-card-body">
        <div className="crypto-qr-wrap">
          {hasStaticQr ? (
            <div className="crypto-qr-multi">
              {entry.qrImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${entry.label} QR code ${i + 1}`}
                  className="crypto-qr-img"
                />
              ))}
            </div>
          ) : (
            <div className="crypto-qr-svg-wrap">
              <QRCodeSVG
                value={uri}
                size={200}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                level="M"
                bgColor="#ffffff"
                fgColor="#0f172a"
              />
            </div>
          )}
          <span className="crypto-qr-hint">Scan with your wallet</span>
        </div>

        <div className="crypto-info">
          <span className="crypto-label">Wallet address</span>
          <div className="crypto-addr-row">
            <code className="crypto-addr" title={entry.address}>
              {entry.address}
            </code>
          </div>
          <div className="crypto-actions">
            <button type="button" className="btn btn-secondary btn-sm" onClick={copy}>
              {copied ? 'Copied!' : 'Copy address'}
            </button>
            <span className="crypto-short" title={entry.address}>
              {shortenAddress(entry.address)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentMethods() {
  return (
    <div className="payment-grid">
      <CryptoCard entry={contactInfo.crypto.btc} />
      <CryptoCard entry={contactInfo.crypto.usdt} />
    </div>
  );
}
