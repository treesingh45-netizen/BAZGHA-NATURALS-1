import React from 'react';

export function Terms() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary-dark mb-4">Terms of Service</h1>
        <div className="w-12 h-[1px] bg-luxury mb-10"></div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary-dark prose-p:text-primary-dark/70 prose-li:text-primary-dark/70 text-sm">
          <p>Welcome to BAZGHA NATURALS.</p>
          <p>By using our website, you agree to the following terms and conditions.</p>

          <h2 className="text-2xl mt-8 mb-4">Product Information</h2>
          <p>We strive to ensure all product descriptions, prices, and images are accurate. However, minor variations may occur due to packaging updates or screen settings.</p>

          <h2 className="text-2xl mt-8 mb-4">Orders</h2>
          <p>We reserve the right to accept, reject, or cancel any order due to pricing errors, stock availability, or suspected fraudulent activity.</p>

          <h2 className="text-2xl mt-8 mb-4">Pricing</h2>
          <p>All prices are listed in Pakistani Rupees (PKR) and are subject to change without prior notice.</p>

          <h2 className="text-2xl mt-8 mb-4">Intellectual Property</h2>
          <p>All website content, including logos, product images, graphics, text, and designs, is the exclusive property of BAZGHA NATURALS and may not be copied or reproduced without written permission.</p>

          <h2 className="text-2xl mt-8 mb-4">Limitation of Liability</h2>
          <p>BAZGHA NATURALS is not responsible for indirect or consequential damages resulting from the use of our products or website.</p>

          <h2 className="text-2xl mt-8 mb-4">Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Continued use of the website constitutes acceptance of any updates.</p>
        </div>
      </div>
    </div>
  );
}
