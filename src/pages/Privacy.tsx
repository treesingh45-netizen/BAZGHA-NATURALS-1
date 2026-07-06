import React from 'react';

export function Privacy() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary-dark mb-4">Privacy Policy</h1>
        <p className="text-sm text-primary-dark/60 uppercase tracking-widest font-bold mb-10 border-b border-beige pb-4">Effective Date: January 1, 2026</p>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary-dark prose-p:text-primary-dark/70 prose-li:text-primary-dark/70 text-sm">
          <p>Welcome to BAZGHA NATURALS. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or place an order.</p>

          <h2 className="text-2xl mt-8 mb-4">Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Shipping Address</li>
            <li>Billing Information</li>
            <li>Order History</li>
            <li>Device and Browser Information</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4">How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Process and deliver your orders</li>
            <li>Provide customer support</li>
            <li>Improve our products and services</li>
            <li>Send order confirmations and updates</li>
            <li>Respond to inquiries</li>
            <li>Prevent fraud and maintain website security</li>
          </ul>

          <h2 className="text-2xl mt-8 mb-4">Information Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. Your data is never sold or shared with third parties for marketing purposes.</p>

          <h2 className="text-2xl mt-8 mb-4">Cookies</h2>
          <p>Our website may use cookies to improve your browsing experience, remember your preferences, and analyze website traffic.</p>

          <h2 className="text-2xl mt-8 mb-4">Third-Party Services</h2>
          <p>We may use trusted third-party services for payment processing, analytics, and shipping. These providers only receive the information necessary to perform their services.</p>

          <h2 className="text-2xl mt-8 mb-4">Contact</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact us.</p>
          <ul className="list-none mb-6 space-y-2">
            <li><strong>Email:</strong> info@bazghanaturals.com</li>
            <li><strong>Phone:</strong> +92 323 2609185</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
