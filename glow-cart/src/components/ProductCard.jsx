import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useToast } from '../context/ToastContext';
import { HiPlus } from 'react-icons/hi2';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showToast(`Added "${product.name.slice(0, 22)}..." to your bag! ✨`);
  };

  const formattedPrice =
    product.price && parseFloat(product.price) > 0
      ? `$${parseFloat(product.price).toFixed(2)}`
      : '$14.00';

  return (
    <div className="group bg-white dark:bg-neutral-900 rounded-3xl p-5 border border-rose-100/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      
      {/* Top Image Container */}
      <div>
        <div className="relative w-full h-52 rounded-2xl bg-gradient-to-b from-rose-50/50 to-white dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center p-4 overflow-hidden mb-4">
          <img
            src={product.api_featured_image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80';
            }}
          />
          
          {/* Brand Tag */}
          <span className="absolute top-3 left-3 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-rose-900 dark:text-rose-200 px-3 py-1 rounded-full border border-rose-100 dark:border-neutral-700 shadow-sm">
            {product.brand || 'GLOW-CART'}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-medium text-neutral-900 dark:text-neutral-100 text-base leading-snug line-clamp-2 mb-2 group-hover:text-rose-900 dark:group-hover:text-rose-300 transition-colors">
          {product.name}
        </h3>
      </div>

      {/* Footer: Price & Add Button */}
      <div className="mt-4 pt-3 border-t border-rose-50 dark:border-neutral-800 flex items-center justify-between">
        <div>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 block uppercase font-medium tracking-wider">
            Price
          </span>
          <span className="text-lg font-bold text-rose-950 dark:text-rose-100">
            {formattedPrice}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-rose-950 dark:bg-rose-500 hover:bg-rose-900 dark:hover:bg-rose-600 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-sm hover:shadow transition-all active:scale-95 flex items-center space-x-1.5"
        >
          <HiPlus className="text-sm" />
          <span>Add to Bag</span>
        </button>
      </div>

    </div>
  );
}