import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';
import { HiSparkles, HiStar, HiPlus, HiArrowRight } from 'react-icons/hi2';

export default function FeaturedProducts() {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const { items, status } = useSelector((state) => state.products);

  // Fetch products if catalog is not loaded yet
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Pick top 4 products for featured section
  const featuredItems = items.slice(0, 4);

  if (status === 'loading') {
    return (
      <div className="py-12 text-center text-rose-950 dark:text-rose-200 font-serif flex items-center justify-center gap-2">
        <HiSparkles className="animate-spin text-xl text-rose-600" />
        Loading featured collection...
      </div>
    );
  }

  if (featuredItems.length === 0) return null;

  return (
    <section className="py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-2">
            <HiSparkles className="text-base" />
            <span>Curated Selection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-rose-950 dark:text-rose-100">
            Featured Formulations
          </h2>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300 hover:text-rose-600 transition group"
        >
          <span>View Full Catalog</span>
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((product) => (
          <div
            key={product.id}
            className="group bg-white dark:bg-neutral-900 rounded-3xl p-5 border border-rose-100/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Image */}
              <div className="relative w-full h-48 rounded-2xl bg-gradient-to-b from-rose-50/50 to-white dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center p-4 overflow-hidden mb-4">
                <img
                  src={product.api_featured_image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80';
                  }}
                />
                <span className="absolute top-3 left-3 bg-rose-950 dark:bg-rose-500 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                  Featured
                </span>
              </div>

              {/* Title & Brand */}
              <div className="flex items-center space-x-1 text-amber-500 text-xs mb-1">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <span className="text-neutral-400 text-[10px] ml-1">(4.9)</span>
              </div>

              <h3 className="font-serif font-medium text-neutral-900 dark:text-neutral-100 text-sm line-clamp-2 mb-2 group-hover:text-rose-900 dark:group-hover:text-rose-300 transition-colors">
                {product.name}
              </h3>
            </div>

            {/* Price & Add Button */}
            <div className="mt-4 pt-3 border-t border-rose-50 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-base font-bold text-rose-950 dark:text-rose-100">
                ${product.price && parseFloat(product.price) > 0 ? parseFloat(product.price).toFixed(2) : '14.00'}
              </span>

              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  showToast(`Added "${product.name.slice(0, 18)}..." to bag! ✨`);
                }}
                className="bg-rose-950 dark:bg-rose-500 hover:bg-rose-900 dark:hover:bg-rose-600 text-white p-2.5 rounded-xl shadow-sm transition active:scale-95"
                aria-label="Add to Bag"
              >
                <HiPlus className="text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}