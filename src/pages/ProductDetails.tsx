import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { Star, ShieldCheck, Truck, Plus, Minus, Heart, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';
import clsx from 'clsx';

export function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'howToUse'>('benefits');

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-serif text-primary-dark mb-4">Product not found</h2>
          <Link to="/shop" className="text-luxury hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity}x ${product.name} added to cart!`, {
      style: { background: '#0F5132', color: '#fff' },
      iconTheme: { primary: '#C8A34D', secondary: '#fff' },
    });
  };

  return (
    <div className="pt-28 pb-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-primary-dark mb-8 transition-colors text-sm">
          <ArrowLeft size={16} className="mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden bg-light-gray border border-beige aspect-[4/5] relative"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.isSale && (
              <span className="absolute top-6 left-6 bg-luxury text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                Sale
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col py-4"
          >
            <div className="mb-2 text-[10px] text-luxury font-bold uppercase tracking-widest">{product.category}</div>
            <h1 className="text-3xl md:text-4xl font-serif text-primary-dark mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={clsx(i < Math.floor(product.rating) ? "text-luxury fill-luxury" : "text-gray-300")} />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-primary-dark/60 font-bold">{product.reviews} Reviews</span>
            </div>

            <div className="text-2xl font-serif text-primary-dark mb-6">Rs. {product.price}</div>
            
            <p className="text-primary-dark/70 text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-8 border-b border-beige">
              <div className="flex items-center border border-primary/20 bg-white">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-primary-dark/60 hover:text-primary-dark transition-colors"><Minus size={14} /></button>
                <span className="w-8 text-center font-bold text-[11px] text-primary-dark">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-primary-dark/60 hover:text-primary-dark transition-colors"><Plus size={14} /></button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-white py-3 px-8 font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-colors"
              >
                Add to Cart
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-primary/20 bg-white text-primary-dark hover:text-luxury hover:border-luxury transition-colors shrink-0">
                <Heart size={16} />
              </button>
            </div>

            {/* Guarantees */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-bold text-primary-dark/80">
                <ShieldCheck size={16} className="text-luxury" />
                <span>100% Organic & Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-bold text-primary-dark/80">
                <Truck size={16} className="text-luxury" />
                <span>Nationwide delivery in 3-5 business days</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-auto">
              <div className="flex gap-6 border-b border-gray-200 mb-6">
                {[
                  { id: 'benefits', label: 'Benefits' },
                  { id: 'ingredients', label: 'Ingredients' },
                  { id: 'howToUse', label: 'How to Use' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={clsx(
                      "pb-3 text-sm font-medium uppercase tracking-wider border-b-2 transition-colors",
                      activeTab === tab.id ? "border-luxury text-primary-dark" : "border-transparent text-gray-400 hover:text-gray-600"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="text-gray-600 text-sm leading-relaxed min-h-[100px]">
                {activeTab === 'benefits' && (
                  <ul className="list-disc pl-5 space-y-2">
                    {product.benefits?.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
                {activeTab === 'ingredients' && (
                  <p>{product.ingredients?.join(', ')}</p>
                )}
                {activeTab === 'howToUse' && (
                  <p>{product.howToUse}</p>
                )}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
