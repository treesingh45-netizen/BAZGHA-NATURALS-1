import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Droplet, Star, ShoppingBag, Truck } from 'lucide-react';
import { products, ingredients, testimonials } from '../data';
import { ProductCard } from '../components/product/ProductCard';

export function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row pt-20 overflow-hidden bg-cream">
        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 z-10 py-16 md:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="w-8 h-[1px] bg-luxury"></div>
            <span className="text-xs text-luxury font-semibold uppercase tracking-widest">Nature's Purest Care</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary-dark mb-6 leading-[1.1]"
          >
            Premium <br/><span className="italic font-light">Organic Care</span> <br/>for Skin & Hair
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary-dark/70 text-sm leading-relaxed mb-10 max-w-sm"
          >
            Discover our handcrafted collection of natural oils, herbal soaps, and skincare products made with carefully selected ingredients.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-primary text-white hover:bg-primary-dark transition-colors text-xs uppercase tracking-widest font-bold flex items-center justify-center">
              Shop Now
            </Link>
            <a href="https://wa.me/923232609185" className="w-full sm:w-auto px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs uppercase tracking-widest font-bold flex items-center justify-center">
              WhatsApp Order
            </a>
          </motion.div>
        </div>

        {/* Imagery */}
        <div className="w-full md:w-1/2 relative bg-beige flex items-center justify-center overflow-hidden min-h-[500px]">
          <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
          
          {/* Floating Leaves (simulated) */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4"
            >
              <Leaf className="text-primary w-12 h-12" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 30, 0], x: [0, -15, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 right-1/4"
            >
              <Leaf className="text-primary w-8 h-8" />
            </motion.div>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-64 h-80 bg-white luxury-shadow rounded-t-full border border-luxury/20 mb-4 flex items-center justify-center p-8 overflow-hidden relative">
               <img src="/images/sweet_almond_oil.jpg" alt="Almond Oil" className="absolute inset-0 w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/20"></div>
               <div className="text-center relative z-10 mt-auto mb-4">
                  <div className="text-[10px] uppercase tracking-widest opacity-60 mb-2 font-bold text-primary-dark">Cold Pressed</div>
                  <div className="w-px h-12 bg-luxury mx-auto mb-2"></div>
                  <div className="font-serif text-2xl text-primary-dark">Almond Oil</div>
                  <div className="text-[8px] uppercase tracking-widest mt-4 opacity-70 font-bold text-primary-dark">Bazgha Naturals</div>
               </div>
            </div>
            <div className="text-xs font-serif italic text-luxury">Featured: Pure Badam Ka Tel</div>
          </div>
          
          {/* Floating Trust Badge */}
          <div className="absolute bottom-12 right-12 glass-card p-4 rounded-xl hidden md:flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">100%</div>
            <div className="text-[10px] uppercase tracking-tighter leading-tight text-primary-dark">
              <span className="font-bold">Natural Ingredients</span><br/>Chemical & Paraben Free
            </div>
          </div>
        </div>

        {/* Vertical Label */}
        <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.4em] opacity-40 text-primary-dark z-20">
          Est. 2026 — Organic Skincare & Wellness
        </div>
      </section>

      {/* Bottom Gallery/Categories - Replaced Featured Categories */}
      <section className="flex flex-col md:flex-row min-h-[14rem] border-t border-beige bg-cream z-20 relative">
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-beige p-8 flex flex-col justify-between hover:bg-beige/50 transition-colors">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 italic mb-4">Featured Collection</div>
          <div>
            <div className="text-xl font-serif uppercase mb-4 text-primary-dark">Organic Oils</div>
            <Link to="/shop" className="text-xs text-luxury uppercase tracking-widest font-bold border-b border-luxury w-fit cursor-pointer hover:opacity-80 transition-opacity">View Catalog</Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-beige p-8 flex flex-col justify-between bg-primary text-cream hover:bg-primary-dark transition-colors">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 italic mb-4">Special Edition</div>
          <div>
            <div className="text-xl font-serif uppercase mb-4">Herbal Soaps</div>
            <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-cream w-fit cursor-pointer hover:opacity-80 transition-opacity">Shop Selection</Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-beige p-8 flex flex-col justify-between hover:bg-beige/50 transition-colors">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 italic mb-4">Pure Purity</div>
          <div>
            <div className="text-xl font-serif uppercase mb-4 text-primary-dark">Face Care</div>
            <Link to="/shop" className="text-xs text-luxury uppercase tracking-widest font-bold border-b border-luxury w-fit cursor-pointer hover:opacity-80 transition-opacity">Explore More</Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-8 flex flex-col justify-center bg-light-gray">
          <div className="text-[11px] mb-2 font-bold uppercase tracking-widest opacity-80 text-primary-dark">Bank Transfer Info</div>
          <div className="text-[10px] leading-tight font-mono opacity-60 mb-4 text-primary-dark">
            Meezan Bank<br/>PK10MEZN0099550109670587
          </div>
          <button 
            onClick={() => {
              navigator.clipboard.writeText('PK10MEZN0099550109670587');
              alert('Copied IBAN to clipboard!');
            }}
            className="px-3 py-1.5 border border-primary/20 text-primary-dark text-[9px] uppercase tracking-tighter w-fit hover:bg-white cursor-pointer transition-all"
          >
            Copy IBAN to Clipboard
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-beige relative overflow-hidden border-t border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-primary-dark mb-4 uppercase tracking-wider">The Bazgha Promise</h2>
            <div className="w-12 h-[1px] bg-luxury mx-auto mb-6"></div>
            <p className="text-primary-dark/70 text-sm leading-relaxed">We believe in the power of nature. Our products are crafted with integrity, ensuring you get the purest care possible.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: '100% Natural', desc: 'Pure botanical ingredients' },
              { icon: ShieldCheck, title: 'Chemical Free', desc: 'No parabens or sulfates' },
              { icon: ShoppingBag, title: 'Handmade', desc: 'Crafted with love in Pakistan' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Nationwide shipping' },
            ].map((feature, i) => (
              <div key={i} className="bg-cream p-8 text-center border border-white hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-luxury">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary-dark mb-2">{feature.title}</h3>
                <p className="text-primary-dark/60 text-[10px] uppercase tracking-wider">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif text-primary-dark mb-4 uppercase tracking-wider">Our Best Sellers</h2>
              <div className="w-12 h-[1px] bg-luxury mb-6"></div>
              <p className="text-primary-dark/70 text-sm max-w-xl leading-relaxed">Customer favorites that deliver visible results. Experience the purest form of nature.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center text-xs text-luxury uppercase tracking-widest font-bold border-b border-luxury w-fit hover:opacity-80 transition-opacity pb-1">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/shop" className="inline-flex items-center text-xs text-luxury uppercase tracking-widest font-bold border-b border-luxury w-fit hover:opacity-80 transition-opacity pb-1">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 transform translate-x-1/4 -translate-y-1/4">
          <Leaf size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 uppercase tracking-wider">Powered by Nature</h2>
              <div className="w-12 h-[1px] bg-luxury mb-6"></div>
              <p className="text-cream/80 text-sm mb-10 leading-relaxed max-w-lg">
                We source the finest organic ingredients to ensure maximum efficacy. Every drop of oil and every bar of soap is packed with nature's healing properties.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {ingredients.map((ing, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl mb-3 flex justify-center text-luxury"><ing.icon size={28} /></div>
                    <h4 className="font-serif text-sm mb-1">{ing.name}</h4>
                    <p className="text-[10px] text-cream/60 uppercase tracking-widest">{ing.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-64 h-80 md:w-80 md:h-96 relative">
                 <img src="/images/natural_ingredients.jpg" alt="Natural Ingredients" className="absolute inset-0 w-full h-full object-cover shadow-2xl z-10" />
                 <div className="absolute -bottom-6 -left-6 w-full h-full border border-luxury/30 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-beige border-t border-cream">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-primary-dark mb-4 uppercase tracking-wider">Loved by Customers</h2>
            <div className="w-12 h-[1px] bg-luxury mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-cream p-10 border border-white relative hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-10 right-10 text-luxury/10">
                  <Star size={40} className="fill-current" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-luxury fill-luxury" />
                  ))}
                </div>
                <p className="text-primary-dark/80 mb-8 relative z-10 italic text-sm leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center text-cream font-serif text-lg">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif text-primary-dark text-sm">{test.name}</h4>
                    <span className="text-[10px] text-primary/60 uppercase tracking-widest flex items-center gap-1 mt-1"><ShieldCheck size={10}/> Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-[10px] text-luxury uppercase tracking-[0.4em] mb-4 font-bold">Stay Updated</div>
          <h2 className="text-4xl font-serif text-cream mb-6">Join the Bazgha Family</h2>
          <p className="text-cream/70 text-sm mb-10 max-w-lg mx-auto leading-relaxed">Subscribe to receive updates, access to exclusive deals, and more insight into our pure botanicals.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 border border-cream/20 bg-transparent text-cream placeholder-cream/40 focus:outline-none focus:border-luxury transition-all text-sm"
            />
            <button type="submit" className="px-8 py-4 bg-luxury text-primary-dark hover:bg-white transition-colors whitespace-nowrap text-xs uppercase tracking-widest font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
