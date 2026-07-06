import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Magic of Black Seed Oil for Hair Growth',
      excerpt: 'Discover why this ancient remedy is making a massive comeback in modern hair care routines.',
      image: '/images/black_seed_oil.jpg',
      date: 'Oct 12, 2026'
    },
    {
      id: 2,
      title: 'Building a Natural Skincare Routine',
      excerpt: 'Learn how to transition from chemical-heavy products to a 100% natural regimen.',
      image: '/images/hero_bg.jpg',
      date: 'Sep 28, 2026'
    },
    {
      id: 3,
      title: 'Why Handmade Soaps are Better',
      excerpt: 'Commercial soaps strip your skin of natural oils. Here is why switching to handmade herbal soaps is crucial.',
      image: '/images/neem_soap.jpg',
      date: 'Sep 15, 2026'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      <div className="bg-primary-dark text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Wellness Journal</h1>
          <p className="text-beige/80 max-w-2xl mx-auto font-light">Insights, tips, and guides on natural beauty and organic living.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden luxury-shadow group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-xs text-luxury font-medium uppercase tracking-wider mb-2 block">{post.date}</span>
                <h3 className="text-xl font-serif text-primary-dark mb-3 line-clamp-2 hover:text-luxury transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center text-primary-dark font-medium text-sm group-hover:text-luxury transition-colors">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
