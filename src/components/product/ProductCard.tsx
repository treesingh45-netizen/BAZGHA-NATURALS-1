import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Heart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { motion } from 'motion/react';
import clsx from 'clsx';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      style: {
        background: '#0F5132',
        color: '#fff',
      },
      iconTheme: {
        primary: '#C8A34D',
        secondary: '#fff',
      },
    });
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-white overflow-hidden luxury-shadow transition-all duration-500 border border-beige"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isSale && (
          <span className="bg-luxury text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            Sale
          </span>
        )}
        {product.isNew && (
          <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            New
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-light-gray">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
          <button 
            onClick={handleAddToCart}
            className="w-10 h-10 bg-white flex items-center justify-center text-primary-dark hover:bg-luxury hover:text-white transition-colors duration-300 shadow-md transform translate-y-4 group-hover:translate-y-0"
          >
            <ShoppingBag size={18} />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="w-10 h-10 bg-white flex items-center justify-center text-primary-dark hover:bg-luxury hover:text-white transition-colors duration-300 shadow-md transform translate-y-4 group-hover:translate-y-0 delay-75"
          >
            <Eye size={18} />
          </Link>
          <button className="w-10 h-10 bg-white flex items-center justify-center text-primary-dark hover:bg-luxury hover:text-white transition-colors duration-300 shadow-md transform translate-y-4 group-hover:translate-y-0 delay-150">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center border-t border-beige">
        <div className="text-[10px] uppercase tracking-widest text-luxury font-medium mb-2">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg text-primary-dark mb-2 hover:text-luxury transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={clsx(i < Math.floor(product.rating) ? "text-luxury fill-luxury" : "text-gray-300")} 
            />
          ))}
          <span className="text-[10px] text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="font-semibold text-sm text-primary-dark">Rs. {product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}
