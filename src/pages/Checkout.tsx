import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Copy, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [copied, setCopied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'easypaisa' | 'jazzcash'>('bank');

  const bankDetails = {
    title: 'AYESHAFYZZI TAILOR SERVICE',
    number: '99550109670587',
    iban: 'PK10MEZN0099550109670587',
    branch: 'Bahria Town Karachi Branch'
  };

  const easypaisaDetails = {
    title: 'Bazgha Naturals',
    number: '03232609185'
  };

  const jazzcashDetails = {
    title: 'Bazgha Naturals',
    number: '03232609185'
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const postalCode = formData.get('postalCode') as string;
    const notes = formData.get('notes') as string;

    const orderId = 'BN-' + Math.floor(100000 + Math.random() * 900000);
    const date = new Date().toLocaleString();
    const shippingMethod = 'Free';
    
    let paymentMethodName = '';
    if (paymentMethod === 'bank') paymentMethodName = 'Meezan Bank Transfer';
    else if (paymentMethod === 'easypaisa') paymentMethodName = 'EasyPaisa';
    else if (paymentMethod === 'jazzcash') paymentMethodName = 'JazzCash';

    let orderItemsStr = '';
    cart.forEach(item => {
      orderItemsStr += `▪️ ${item.name}\n   Qty: ${item.quantity} | Price: Rs. ${item.price} | Subtotal: Rs. ${item.price * item.quantity}\n`;
    });

    const whatsappMessage = `
*NEW ORDER RECEIVED!* 🛍️
-----------------------------------
*Order ID:* ${orderId}
*Date:* ${date}

*👤 Customer Details*
*Name:* ${firstName} ${lastName}
*Phone:* ${phone}
*Email:* ${email}

*📍 Shipping Address*
*Address:* ${address}
*City:* ${city}
*Province:* ${formData.get('province') || 'N/A'}
*Postal Code:* ${postalCode}

*🛒 Order Details*
${orderItemsStr}
-----------------------------------
*Subtotal:* Rs. ${cartTotal}
*Shipping Charges:* ${shippingMethod}
*Total Amount:* *Rs. ${cartTotal}*
-----------------------------------
*💳 Payment Method:* ${paymentMethodName}
*📝 Customer Notes:* ${notes ? notes : 'None'}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/923232609185?text=${encodedMessage}`, '_blank');

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center bg-cream px-4 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-white border border-green-600 flex items-center justify-center text-green-600 mb-6"
        >
          <CheckCircle size={48} strokeWidth={1} />
        </motion.div>
        <h2 className="text-4xl font-serif text-primary-dark mb-4">Order Successful!</h2>
        <p className="text-primary-dark/60 max-w-md mb-8 text-sm">Thank you for choosing Bazgha Naturals. Your order has been placed and is being processed.</p>
        <Link to="/" className="px-8 py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] pt-32 pb-16 flex flex-col items-center justify-center text-center bg-cream">
        <h2 className="text-2xl font-serif text-primary-dark mb-4">Your cart is empty</h2>
        <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-luxury border-b border-luxury pb-1 hover:opacity-80 transition-opacity">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 bg-cream min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Form Details */}
          <div className="flex-1">
            <div className="bg-white border border-beige p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-serif text-primary-dark mb-6">Shipping Address</h2>
              <form onSubmit={handleSubmit} id="checkout-form" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">First Name</label>
                    <input name="firstName" required type="text" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">Last Name</label>
                    <input name="lastName" required type="text" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">Email Address</label>
                  <input name="email" required type="email" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">Phone Number (WhatsApp preferred)</label>
                  <input name="phone" required type="tel" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">Address</label>
                  <input name="address" required type="text" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">City</label>
                    <input name="city" required type="text" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">Province</label>
                    <input name="province" required type="text" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">Postal Code</label>
                  <input name="postalCode" required type="text" className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-primary-dark/60 mb-2">Customer Notes (Optional)</label>
                  <textarea name="notes" rows={3} className="w-full px-4 py-3 border border-beige focus:ring-1 focus:ring-luxury focus:border-luxury outline-none bg-light-gray text-sm resize-none"></textarea>
                </div>
              </form>
            </div>

            <div className="bg-white border border-beige p-6 md:p-8">
               <h2 className="text-2xl font-serif text-primary-dark mb-6">Payment Method</h2>
               <div className="space-y-4">
                 <label className="flex items-center p-4 border border-beige cursor-pointer hover:border-luxury transition-colors has-[:checked]:border-luxury has-[:checked]:bg-beige/20">
                   <input 
                    type="radio" 
                    name="payment" 
                    value="bank" 
                    checked={paymentMethod === 'bank'} 
                    onChange={() => setPaymentMethod('bank')}
                    className="w-4 h-4 text-luxury accent-luxury" 
                   />
                   <span className="ml-3 text-[11px] uppercase tracking-wider font-bold text-primary-dark">Meezan Bank Transfer</span>
                 </label>
                 <label className="flex items-center p-4 border border-beige cursor-pointer hover:border-luxury transition-colors has-[:checked]:border-luxury has-[:checked]:bg-beige/20">
                   <input 
                    type="radio" 
                    name="payment" 
                    value="easypaisa" 
                    checked={paymentMethod === 'easypaisa'} 
                    onChange={() => setPaymentMethod('easypaisa')}
                    className="w-4 h-4 text-luxury accent-luxury" 
                   />
                   <span className="ml-3 text-[11px] uppercase tracking-wider font-bold text-primary-dark">EasyPaisa</span>
                 </label>
                 <label className="flex items-center p-4 border border-beige cursor-pointer hover:border-luxury transition-colors has-[:checked]:border-luxury has-[:checked]:bg-beige/20">
                   <input 
                    type="radio" 
                    name="payment" 
                    value="jazzcash" 
                    checked={paymentMethod === 'jazzcash'} 
                    onChange={() => setPaymentMethod('jazzcash')}
                    className="w-4 h-4 text-luxury accent-luxury" 
                   />
                   <span className="ml-3 text-[11px] uppercase tracking-wider font-bold text-primary-dark">JazzCash</span>
                 </label>
               </div>

               {paymentMethod === 'bank' && (
                 <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 p-6 bg-light-gray border border-beige text-[11px] uppercase tracking-widest font-bold"
                 >
                    <div className="flex items-center gap-2 mb-4 text-primary-dark">
                      <ShieldCheck size={14}/> Secure Bank Transfer Details
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-beige">
                        <span className="text-primary-dark/50">Bank</span>
                        <span className="text-primary-dark">Meezan Bank</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-beige">
                        <span className="text-primary-dark/50">Account Title</span>
                        <span className="text-primary-dark">{bankDetails.title}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-beige">
                        <span className="text-primary-dark/50">Account Number</span>
                        <div className="flex items-center gap-2">
                          <span className="text-primary-dark">{bankDetails.number}</span>
                          <button onClick={() => handleCopy(bankDetails.number)} className="text-primary-dark/40 hover:text-luxury" title="Copy">
                            <Copy size={12}/>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-beige">
                        <span className="text-primary-dark/50">IBAN</span>
                        <div className="flex items-center gap-2">
                          <span className="text-primary-dark">{bankDetails.iban}</span>
                          <button onClick={() => handleCopy(bankDetails.iban)} className="text-primary-dark/40 hover:text-luxury" title="Copy">
                            <Copy size={12}/>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-primary-dark/50">Branch</span>
                        <span className="text-primary-dark text-right">{bankDetails.branch}</span>
                      </div>
                    </div>
                    {copied && <div className="text-green-600 text-[9px] mt-2 text-right">Copied to clipboard!</div>}
                    <p className="text-[9px] text-primary-dark/40 mt-4 italic">Please transfer the total amount and send the receipt to our WhatsApp number with your order ID.</p>
                 </motion.div>
               )}

               {paymentMethod === 'easypaisa' && (
                 <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 p-6 bg-light-gray border border-beige text-[11px] uppercase tracking-widest font-bold"
                 >
                    <div className="flex items-center gap-2 mb-4 text-primary-dark">
                      <ShieldCheck size={14}/> EasyPaisa Details
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-beige">
                        <span className="text-primary-dark/50">Account Title</span>
                        <span className="text-primary-dark">{easypaisaDetails.title}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-primary-dark/50">Mobile Number</span>
                        <div className="flex items-center gap-2">
                          <span className="text-primary-dark">{easypaisaDetails.number}</span>
                          <button onClick={() => handleCopy(easypaisaDetails.number)} className="text-primary-dark/40 hover:text-luxury" title="Copy">
                            <Copy size={12}/>
                          </button>
                        </div>
                      </div>
                    </div>
                    {copied && <div className="text-green-600 text-[9px] mt-2 text-right">Copied to clipboard!</div>}
                    <p className="text-[9px] text-primary-dark/40 mt-4 italic">Please transfer the total amount and send the receipt to our WhatsApp number with your order ID.</p>
                 </motion.div>
               )}

               {paymentMethod === 'jazzcash' && (
                 <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 p-6 bg-light-gray border border-beige text-[11px] uppercase tracking-widest font-bold"
                 >
                    <div className="flex items-center gap-2 mb-4 text-primary-dark">
                      <ShieldCheck size={14}/> JazzCash Details
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-beige">
                        <span className="text-primary-dark/50">Account Title</span>
                        <span className="text-primary-dark">{jazzcashDetails.title}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-primary-dark/50">Mobile Number</span>
                        <div className="flex items-center gap-2">
                          <span className="text-primary-dark">{jazzcashDetails.number}</span>
                          <button onClick={() => handleCopy(jazzcashDetails.number)} className="text-primary-dark/40 hover:text-luxury" title="Copy">
                            <Copy size={12}/>
                          </button>
                        </div>
                      </div>
                    </div>
                    {copied && <div className="text-green-600 text-[9px] mt-2 text-right">Copied to clipboard!</div>}
                    <p className="text-[9px] text-primary-dark/40 mt-4 italic">Please transfer the total amount and send the receipt to our WhatsApp number with your order ID.</p>
                 </motion.div>
               )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
             <div className="bg-white border border-beige p-8 sticky top-32">
              <h3 className="text-xl font-serif text-primary-dark mb-6">Order Items</h3>
              
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-light-gray overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-[10px] uppercase tracking-widest">
                      <div className="font-bold text-primary-dark line-clamp-1 mb-1">{item.name}</div>
                      <div className="text-primary-dark/50 font-bold">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-xs font-serif text-primary-dark shrink-0">
                      Rs. {item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-beige text-sm text-primary-dark/70">
                 <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif">Rs. {cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-luxury font-bold text-[10px] uppercase tracking-widest mt-1">Free</span>
                </div>
                <div className="flex justify-between items-end pt-4 mt-4 border-t border-beige">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-serif text-primary-dark">Rs. {cartTotal}</span>
                </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                className="w-full mt-8 py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
