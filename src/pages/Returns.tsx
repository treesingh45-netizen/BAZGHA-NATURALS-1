import React from 'react';

export function Returns() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary-dark mb-4">Returns & Refunds</h1>
        <div className="w-12 h-[1px] bg-luxury mb-10"></div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary-dark prose-p:text-primary-dark/70 prose-li:text-primary-dark/70 text-sm">
          <p>Customer satisfaction is our priority.</p>

          <h2 className="text-2xl mt-8 mb-4">Return Eligibility</h2>
          <p>Products may be returned within 7 days of delivery if:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>The item is damaged during delivery.</li>
            <li>You received the wrong product.</li>
            <li>The product is defective.</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4">Non-Returnable Items</h2>
          <p>For hygiene and safety reasons, opened or used skincare products cannot be returned unless they are defective or damaged upon arrival.</p>

          <h2 className="text-2xl mt-8 mb-4">Refund Process</h2>
          <p>After inspection and approval, refunds will be processed within 5–7 business days using the original payment method or another agreed method.</p>

          <h2 className="text-2xl mt-8 mb-4">Exchange</h2>
          <p>Eligible products may also be exchanged for the same item, subject to stock availability.</p>

          <h2 className="text-2xl mt-8 mb-4">Contact for Returns</h2>
          <ul className="list-none mb-6 space-y-2">
            <li><strong>Email:</strong> info@bazghanaturals.com</li>
            <li><strong>Phone:</strong> +92 323 2609185</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
