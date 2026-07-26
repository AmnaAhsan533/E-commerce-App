import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiShoppingBag, HiArrowRight, HiCheckCircle } from 'react-icons/hi2';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);

  // Safe total calculation ensuring numeric prices
  const total = cartItems.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 14.00;
    return acc + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 transition-colors duration-300">
      
      {/* Page Title */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-neutral-800 text-rose-950 dark:text-rose-200 flex items-center justify-center text-xl">
          <HiShoppingBag />
        </div>
        <h1 className="text-3xl font-serif font-bold text-rose-950 dark:text-rose-100">
          Checkout Summary
        </h1>
      </div>

      {cartItems.length === 0 ? (
        /* Empty State */
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-10 text-center border border-rose-100 dark:border-neutral-800 shadow-sm transition-colors">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">
            Your bag is empty. Explore our collection to add botanical formulations.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 bg-rose-950 dark:bg-rose-500 hover:bg-rose-900 dark:hover:bg-rose-600 text-white px-6 py-3 rounded-2xl text-xs font-semibold shadow-sm transition active:scale-95 group"
          >
            <span>Go to Shop</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      ) : (
        /* Order Summary Card */
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-rose-100/80 dark:border-neutral-800 shadow-sm space-y-6 transition-colors">
          
          <h2 className="text-xs uppercase font-bold tracking-widest text-rose-600 dark:text-rose-400 font-serif">
            Order Items ({cartItems.length})
          </h2>

          <div className="divide-y divide-rose-50 dark:divide-neutral-800">
            {cartItems.map((item) => {
              const itemPrice = parseFloat(item.price) || 14.00;
              const itemTotal = itemPrice * item.quantity;

              return (
                <div key={item.id} className="py-4 flex justify-between items-center text-sm gap-4">
                  <div className="flex items-center space-x-3">
                    {/* Item Thumbnail */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-rose-50/50 to-white dark:from-neutral-800 dark:to-neutral-900 p-1 flex items-center justify-center border border-rose-100/50 dark:border-neutral-700/50 shrink-0">
                      <img
                        src={item.api_featured_image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          e.target.src =
                            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80';
                        }}
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-neutral-800 dark:text-neutral-100 line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500">
                        Qty: {item.quantity} × ${itemPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <span className="font-bold text-rose-950 dark:text-rose-200 shrink-0">
                    ${itemTotal.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Subtotal & Action */}
          <div className="border-t border-rose-100 dark:border-neutral-800 pt-6 space-y-6">
            <div className="flex justify-between items-center font-bold text-lg text-rose-950 dark:text-rose-100">
              <span>Total:</span>
              <span className="text-2xl">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => alert('Order placed successfully! Thank you for shopping with GLOW-CART. ✨')}
              className="w-full bg-rose-950 dark:bg-rose-500 hover:bg-rose-900 dark:hover:bg-rose-600 text-white py-4 rounded-2xl text-sm font-semibold shadow-md transition active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              <HiCheckCircle className="text-lg" />
              <span>Complete Purchase</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}