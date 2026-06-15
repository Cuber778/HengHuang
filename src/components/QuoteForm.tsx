'use client';

import { FormEvent, useMemo, useState } from 'react';
import { contactInfo, products } from '@/data/products';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]?.name ?? '');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    format: '',
    message: '',
  });

  const selected = useMemo(
    () => products.find((item) => item.name === selectedProduct),
    [selectedProduct],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="submitted-wrap">
        <div className="submitted-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22,4 12,14.01 9,11.01" />
          </svg>
        </div>
        <h2>Inquiry Received</h2>
        <p>
          Thank you for reaching out. Our sales team will review your inquiry and get back to you within{' '}
          <strong>1 business day</strong>.
        </p>
        <div className="submitted-contact">
          <p className="small muted">For faster response, contact us directly:</p>
          <p>Email: {contactInfo.email}</p>
          <p>WhatsApp: {contactInfo.whatsapp}</p>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', quantity: '', format: '', message: '' }); }}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid" style={{ marginBottom: 16 }}>
        <div className="field-wrap">
          <input
            className="field"
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-wrap">
          <input
            className="field"
            name="email"
            type="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-wrap">
          <input
            className="field"
            name="phone"
            placeholder="Phone / WhatsApp *"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-wrap">
          <input
            className="field"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <select
          className="select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-grid" style={{ marginBottom: 16 }}>
        <div className="field-wrap">
          <input
            className="field"
            name="quantity"
            placeholder="Required Quantity"
            value={form.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="field-wrap">
          <input
            className="field"
            name="format"
            placeholder="Target Purity / Format"
            value={form.format}
            onChange={handleChange}
          />
        </div>
      </div>

      <textarea
        className="textarea"
        name="message"
        placeholder="Project details, custom sequence, delivery timeline, shipping country, etc."
        rows={5}
        value={form.message}
        onChange={handleChange}
      />

      <div style={{ marginTop: 18 }}>
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </div>
    </form>
  );
}
