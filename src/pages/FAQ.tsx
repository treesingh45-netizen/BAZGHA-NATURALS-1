import React from 'react';

export function FAQ() {
  const faqs = [
    {
      q: "Are your products 100% natural?",
      a: "Yes. Our products are made with carefully selected natural ingredients and are free from harmful chemicals."
    },
    {
      q: "Do you deliver all over Pakistan?",
      a: "Yes. We offer nationwide delivery across Pakistan."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept: Meezan Bank Transfer, EasyPaisa, and JazzCash."
    },
    {
      q: "How long does delivery take?",
      a: "Orders are typically delivered within 2–7 business days, depending on your location."
    },
    {
      q: "Can I cancel my order?",
      a: "Yes. Orders can be cancelled before they are dispatched. Please contact us immediately if you wish to cancel."
    },
    {
      q: "Are your products suitable for all skin types?",
      a: "Most of our products are formulated for all skin types. We recommend performing a patch test before first use."
    },
    {
      q: "Do you offer refunds?",
      a: "Yes. Refunds or exchanges are available for damaged, defective, or incorrect items according to our Returns & Refunds Policy."
    },
    {
      q: "How can I contact customer support?",
      a: "Email: info@bazghanaturals.com | Phone / WhatsApp: +92 323 2609185"
    },
    {
      q: "Where are your products made?",
      a: "All BAZGHA NATURALS products are proudly manufactured in Pakistan using high-quality natural ingredients."
    },
    {
      q: "How should I store your products?",
      a: "Store products in a cool, dry place away from direct sunlight. Keep containers tightly closed after use to maintain product quality."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary-dark mb-4">Frequently Asked Questions</h1>
        <div className="w-12 h-[1px] bg-luxury mb-12"></div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-beige pb-6">
              <h3 className="text-lg font-serif text-primary-dark mb-3 flex gap-3">
                <span className="text-luxury">{index + 1}.</span> 
                {faq.q}
              </h3>
              <p className="text-primary-dark/70 text-sm pl-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
