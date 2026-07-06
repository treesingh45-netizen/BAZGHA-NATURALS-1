import React from 'react';

export function About() {
  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Story</h1>
          <p className="text-beige/80 max-w-2xl mx-auto font-light">Rooted in tradition, crafted for the modern world. Discover the essence of Bazgha Naturals.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-3xl overflow-hidden luxury-shadow">
            <img src="/images/natural_ingredients.jpg" alt="Making natural products" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-primary-dark mb-6">Our Philosophy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
              At Bazgha Naturals, we believe that nature provides the most powerful solutions for healthy skin and hair. Born in Karachi, Pakistan, our brand is a testament to the rich heritage of herbal remedies passed down through generations.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              We meticulously source the finest organic ingredients—cold-pressed oils, pure botanical extracts, and unrefined butters—to craft formulations that are not only effective but also deeply nourishing. Every product is handmade with love, ensuring it remains free from harmful chemicals, parabens, and synthetic fragrances.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 text-center luxury-shadow mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-primary-dark mb-8">Our Quality Promise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif text-luxury mb-3">100% Pure</h3>
              <p className="text-gray-500 text-sm">We use only raw, unrefined, and organic ingredients sourced responsibly.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-luxury mb-3">Handcrafted</h3>
              <p className="text-gray-500 text-sm">Every batch is made in small quantities to ensure premium quality and freshness.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-luxury mb-3">Cruelty-Free</h3>
              <p className="text-gray-500 text-sm">We love animals. Our products are never tested on them, only on willing humans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
