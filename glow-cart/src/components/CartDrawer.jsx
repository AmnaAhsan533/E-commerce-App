import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeFromCart, updateQuantity } from '../store/cartSlice';
import { useToast } from '../context/ToastContext';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  
  // Read cart state from Redux
  const { items, isCartOpen } = useSelector((state) => state.cart);

  // Subtotal calculation
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => dispatch(toggleCart())}
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-300" 
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-rose-100">
              <h2 className="text-2xl font-serif font-bold text-rose-950 flex items-center gap-2">
                Your Shopping Bag
              </h2>
              <button
                onClick={() => dispatch(toggleCart())}
                className="w-9 h-9 rounded-full bg-rose-50 text-rose-900 flex items-center justify-center font-bold hover:bg-rose-100 transition"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-300 text-2xl">
                    🛍️
                  </div>
                  <p className="font-serif text-lg text-neutral-800">Your bag is currently empty.</p>
                  <p className="text-sm text-neutral-400 mt-1">Explore our collection to add items.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-3 rounded-2xl bg-rose-50/40 border border-rose-100/60"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-14 h-14 object-contain rounded-xl bg-white p-1" 
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-neutral-900 line-clamp-1 max-w-[140px]">
                          {item.name}
                        </h4>
                        <p className="text-xs font-bold text-rose-950 mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center bg-white border border-rose-200 rounded-xl px-2 py-1 space-x-2 shadow-sm">
                        <button
                          onClick={() => {
                            if (item.quantity === 1) {
                              dispatch(removeFromCart(item.id));
                              showToast('Item removed from bag');
                            } else {
                              dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
                            }
                          }}
                          className="text-neutral-500 hover:text-rose-950 font-bold text-xs w-4 text-center"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-neutral-800 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="text-neutral-500 hover:text-rose-950 font-bold text-xs w-4 text-center"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item.id));
                          showToast('Item removed from bag');
                        }}
                        className="text-neutral-400 hover:text-rose-600 text-xs p-1"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="pt-6 border-t border-rose-100 space-y-4">
              <div className="flex justify-between items-center text-base">
                <span className="text-neutral-500 font-medium">Subtotal</span>
                <span className="text-2xl font-bold font-serif text-rose-950">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-neutral-400">Taxes and shipping calculated at checkout.</p>
              
              <button 
                onClick={() => {
                  showToast('Checkout flow simulated! 💳');
                }}
                className="w-full bg-rose-950 hover:bg-rose-900 text-white py-4 rounded-2xl font-medium text-sm shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}