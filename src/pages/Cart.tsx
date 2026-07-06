import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] pt-32 pb-16 flex flex-col items-center justify-center bg-cream">
        <div className="w-24 h-24 bg-white border border-beige flex items-center justify-center text-primary/30 mb-6">
          <ShoppingBag size={48} strokeWidth={1} />
        </div>
        <h2 className="text-3xl font-serif text-primary-dark mb-4">Your Cart is Empty</h2>
        <p className="text-primary-dark/60 mb-8 max-w-md text-center text-sm">Looks like you haven't added anything to your cart yet. Discover our premium natural products.</p>
        <Link to="/shop" className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors">
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 bg-cream min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-serif text-primary-dark mb-10">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white border border-beige p-6 md:p-8">
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-beige text-[10px] font-bold text-primary-dark/60 uppercase tracking-widest">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-6 border-b border-beige last:border-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                  >
                    {/* Mobile layout is different from desktop */}
                    <div className="col-span-1 md:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-24 overflow-hidden shrink-0 bg-light-gray">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <Link to={`/product/${item.id}`} className="font-serif text-lg text-primary-dark hover:text-luxury transition-colors line-clamp-1">
                          {item.name}
                        </Link>
                        <div className="text-[10px] text-primary-dark/50 uppercase tracking-widest mt-1">{item.category}</div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold mt-2 transition-colors md:hidden"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center text-primary-dark font-serif text-lg md:font-normal">
                      <span className="md:hidden text-[10px] uppercase tracking-widest font-bold text-primary-dark/50">Price:</span>
                      Rs. {item.price}
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                      <span className="md:hidden text-[10px] uppercase tracking-widest font-bold text-primary-dark/50">Quantity:</span>
                      <div className="flex items-center border border-primary/20 bg-light-gray">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-primary-dark/60 hover:text-primary"><Minus size={12} /></button>
                        <span className="w-6 text-center text-[10px] font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-primary-dark/60 hover:text-primary"><Plus size={12} /></button>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center font-serif text-lg text-primary-dark">
                      <span className="md:hidden text-[10px] uppercase tracking-widest font-bold text-primary-dark/50">Total:</span>
                      Rs. {item.price * item.quantity}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="hidden md:flex ml-4 text-primary-dark/30 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white border border-beige p-8 sticky top-32">
              <h3 className="text-2xl font-serif text-primary-dark mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 text-sm text-primary-dark/70 border-b border-beige pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif text-lg text-primary-dark">Rs. {cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-luxury font-medium text-[10px] uppercase tracking-widest">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-primary-dark/70 text-sm">Total</span>
                <span className="text-3xl font-serif text-primary-dark">Rs. {cartTotal}</span>
              </div>

              <Link 
                to="/checkout"
                className="w-full py-4 bg-primary text-white text-[10px] uppercase tracking-widest font-bold flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
