import React, { useState } from 'react';
import { products } from '../data';
import { ProductCard } from '../components/product/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import clsx from 'clsx';

export function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Oils', 'Soaps', 'Skincare'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-[10px] text-luxury uppercase tracking-[0.4em] mb-4 font-bold">Catalog</div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Products</h1>
          <div className="w-12 h-[1px] bg-luxury mx-auto mb-6"></div>
          <p className="text-beige/80 max-w-2xl mx-auto font-light text-sm leading-relaxed">Explore our complete range of premium organic skincare and haircare products, handcrafted for your wellbeing.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar / Filters */}
          <div className="w-full md:w-56 shrink-0">
            <div className="sticky top-32">
              <div className="flex items-center gap-2 mb-6 text-primary-dark font-bold uppercase tracking-widest text-[11px] border-b border-beige pb-4">
                <Filter size={14} />
                <h3>Categories</h3>
              </div>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={clsx(
                        "w-full text-left px-3 py-2 transition-colors text-[10px] uppercase tracking-wider font-bold",
                        activeCategory === cat 
                          ? "bg-primary-dark text-white" 
                          : "text-primary-dark/60 hover:bg-beige hover:text-primary-dark"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 border-b border-beige pb-4">
              <p className="text-primary-dark/60 text-[10px] uppercase tracking-widest font-bold">Showing {filteredProducts.length} results</p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary-dark cursor-pointer hover:text-luxury transition-colors">
                <span>Sort by: Featured</span>
                <ChevronDown size={14} />
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
