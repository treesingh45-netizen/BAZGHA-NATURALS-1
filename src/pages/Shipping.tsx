import React from 'react';

export function Shipping() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary-dark mb-4">Shipping Policy</h1>
        <div className="w-12 h-[1px] bg-luxury mb-10"></div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary-dark prose-p:text-primary-dark/70 prose-li:text-primary-dark/70 text-sm">
          <p>At BAZGHA NATURALS, we are committed to delivering your products safely and on time throughout Pakistan.</p>

          <h2 className="text-2xl mt-8 mb-4">Delivery Coverage</h2>
          <p>We currently deliver nationwide across Pakistan.</p>

          <h2 className="text-2xl mt-8 mb-4">Processing Time</h2>
          <p>Orders are processed within 1–2 business days after confirmation.</p>

          <h2 className="text-2xl mt-8 mb-4">Delivery Time</h2>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Major Cities:</strong> 2–4 Business Days</li>
            <li><strong>Other Areas:</strong> 3–7 Business Days</li>
          </ul>
          <p>Delivery times may vary due to weather conditions, holidays, or courier delays.</p>

          <h2 className="text-2xl mt-8 mb-4">Shipping Charges</h2>
          <p>Shipping charges are calculated during checkout and may vary depending on your location.</p>

          <h2 className="text-2xl mt-8 mb-4">Order Tracking</h2>
          <p>Once your order is dispatched, you will receive tracking details via WhatsApp or SMS.</p>

          <h2 className="text-2xl mt-8 mb-4">Incorrect Address</h2>
          <p>Please ensure your shipping information is accurate. We are not responsible for delays caused by incorrect addresses provided by customers.</p>
        </div>
      </div>
    </div>
  );
}
