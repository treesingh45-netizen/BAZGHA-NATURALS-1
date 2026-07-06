import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-beige pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-widest font-serif uppercase text-white block">
              Bazgha <span className="text-luxury font-light capitalize">Naturals</span>
            </Link>
            <p className="text-beige/80 text-sm leading-relaxed">
              Nature's Purest Care for Healthy Skin & Hair. Premium organic skincare, haircare, and natural oils made in Pakistan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-luxury hover:border-luxury hover:text-white transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-luxury hover:border-luxury hover:text-white transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-luxury hover:border-luxury hover:text-white transition-colors duration-300">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-beige/80 hover:text-luxury transition-colors text-sm">About Us</Link></li>
              <li><Link to="/shop" className="text-beige/80 hover:text-luxury transition-colors text-sm">Shop All Products</Link></li>
              <li><Link to="/contact" className="text-beige/80 hover:text-luxury transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/blog" className="text-beige/80 hover:text-luxury transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-beige/80 hover:text-luxury transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-beige/80 hover:text-luxury transition-colors text-sm">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-beige/80 hover:text-luxury transition-colors text-sm">Returns & Refunds</Link></li>
              <li><Link to="/terms" className="text-beige/80 hover:text-luxury transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-beige/80 hover:text-luxury transition-colors text-sm">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-beige/80 text-sm">
                <MapPin size={18} className="text-luxury shrink-0 mt-0.5" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-beige/80 text-sm">
                <Phone size={18} className="text-luxury shrink-0" />
                <span>+92 323 2609185</span>
              </li>
              <li className="flex items-center space-x-3 text-beige/80 text-sm">
                <Mail size={18} className="text-luxury shrink-0" />
                <span>info@bazghanaturals.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-beige/60 text-sm text-center md:text-left">
            &copy; 2026 BAZGHA NATURALS. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-beige/60 text-sm">Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
