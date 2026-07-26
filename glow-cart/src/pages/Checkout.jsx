import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold text-rose-950 mb-8">Checkout Summary</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 text-center border border-rose-100 shadow-sm">
          <p className="text-neutral-500 text-sm mb-4">Your bag is empty.</p>
          <Link to="/shop" className="bg-rose-950 text-white px-6 py-2.5 rounded-xl text-xs font-semibold">
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm space-y-6">
          <div className="divide-y divide-rose-50">
            {cartItems.map((item) => (
              <div key={item.id} className="py-3 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-neutral-800">{item.name}</p>
                  <p className="text-xs text-neutral-400">Qty: {item.quantity}</p>
                </div>
                <span className="font-bold text-rose-950">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-rose-100 pt-4 flex justify-between font-bold text-lg text-rose-950">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}