import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.', {
      style: { background: '#0F5132', color: '#fff' },
      iconTheme: { primary: '#C8A34D', secondary: '#fff' },
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-dark text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-beige/80 max-w-2xl mx-auto font-light">We'd love to hear from you. Reach out to us for any questions regarding our natural products, your order, or general inquiries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-primary-dark mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-luxury shrink-0 luxury-shadow">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary-dark mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600 mb-2">We are available on WhatsApp for quick responses.</p>
                  <a href="https://wa.me/923232609185" className="text-luxury font-medium hover:underline text-lg">+92 323 2609185</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-luxury shrink-0 luxury-shadow">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary-dark mb-1">Email</h4>
                  <p className="text-gray-600 mb-2">For wholesale and general inquiries.</p>
                  <a href="mailto:info@bazghanaturals.com" className="text-luxury font-medium hover:underline">info@bazghanaturals.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-luxury shrink-0 luxury-shadow">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary-dark mb-1">Location</h4>
                  <p className="text-gray-600">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-luxury shrink-0 luxury-shadow">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary-dark mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 luxury-shadow">
            <h3 className="text-2xl font-serif text-primary-dark mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-gray-50 transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-gray-50 transition-colors" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-gray-50 transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-gray-50 transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-white rounded-full font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
