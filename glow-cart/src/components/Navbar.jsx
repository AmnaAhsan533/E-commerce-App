import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/cartSlice';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-rose-100 dark:border-neutral-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-rose-950 dark:bg-rose-500 flex items-center justify-center text-white font-serif font-bold text-xl shadow-inner">
            G
          </div>
          <div>
            <span className="text-2xl font-serif font-bold tracking-tight text-rose-950 dark:text-rose-100 block leading-none">
              GLOW-CART
            </span>
            <span className="text-[10px] tracking-widest uppercase text-rose-600 dark:text-rose-400 font-semibold">
              Botanical Beauty
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-8 text-xs uppercase font-bold tracking-wider">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'text-rose-950 dark:text-rose-200 underline underline-offset-8' : 'text-neutral-400 hover:text-rose-950 dark:hover:text-rose-100'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => isActive ? 'text-rose-950 dark:text-rose-200 underline underline-offset-8' : 'text-neutral-400 hover:text-rose-950 dark:hover:text-rose-100'}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/checkout" 
            className={({ isActive }) => isActive ? 'text-rose-950 dark:text-rose-200 underline underline-offset-8' : 'text-neutral-400 hover:text-rose-950 dark:hover:text-rose-100'}
          >
            Checkout
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-rose-50 dark:bg-neutral-800 text-rose-950 dark:text-rose-200 border border-rose-200 dark:border-neutral-700 hover:scale-105 transition active:scale-95 text-xs font-semibold"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>

          {/* Bag Toggle Button */}
          <button
            onClick={() => dispatch(toggleCart())}
            className="relative flex items-center space-x-2 bg-rose-50 dark:bg-neutral-800 hover:bg-rose-100 dark:hover:bg-neutral-700 text-rose-950 dark:text-rose-100 px-4 py-2.5 rounded-full border border-rose-200 dark:border-neutral-700 font-medium text-sm transition"
          >
            <span>Bag</span>
            {totalItemCount > 0 && (
              <span className="bg-rose-900 dark:bg-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItemCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}