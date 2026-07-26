import React from 'react';
import { useToast } from '../context/ToastContext';

export default function Footer() {
  const { showToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing to the GLOW-CART newsletter! ✨');
    e.target.reset();
  };

  return (
    <footer className="bg-neutral-900 text-rose-100/80 pt-16 pb-12 mt-20 border-t border-rose-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-rose-200 text-rose-950 flex items-center justify-center font-serif font-bold text-lg">
                G
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-white">
                GLOW-CART
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Curated botanical skincare & cosmetic formulations delivered straight to your door.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-rose-300 font-serif">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#shop" className="hover:text-white transition">Botanical Cleansers</a></li>
              <li><a href="#shop" className="hover:text-white transition">Hydrating Toners</a></li>
              <li><a href="#shop" className="hover:text-white transition">Sustainably Packaged Serums</a></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-rose-300 font-serif">
              Support
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#about" className="hover:text-white transition">Formulation Standard</a></li>
              <li><a href="#shipping" className="hover:text-white transition">Shipping & Returns</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Specialist</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-rose-300 font-serif">
              Stay Connected
            </h4>
            <p className="text-xs text-neutral-400">
              Receive early access to formula drops and exclusive botanical guides.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 pt-1">
              <input 
                type="email" 
                required 
                placeholder="Enter email..." 
                className="bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-400 w-full transition"
              />
              <button 
                type="submit" 
                className="bg-rose-200 text-neutral-950 hover:bg-white text-xs font-semibold px-4 py-2 rounded-xl transition active:scale-95 whitespace-nowrap"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} GLOW-CART Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-neutral-400 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-400 transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}