import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiSparkles, HiTruck, HiShieldCheck, HiArrowPath } from 'react-icons/hi2';
import FeaturedProducts from '../components/FeaturedProducts';
import headerImg from '../assets/header.webp'; 

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Hero Banner Container */}
      <div className="bg-gradient-to-r from-rose-100/80 via-rose-50 to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 rounded-3xl p-8 sm:p-12 lg:p-16 border border-rose-100 dark:border-neutral-800 shadow-sm relative overflow-hidden">
        
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-rose-200/40 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start justify-center">
            <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-rose-600 dark:text-rose-400 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-rose-200 dark:border-neutral-700 mb-6">
              <HiSparkles className="text-sm" />
              <span>Botanical Formulations 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose-950 dark:text-rose-100 leading-tight">
              Radiance Formulated by Science & Nature
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base mt-4 mb-8 leading-relaxed">
              Discover high-performance cosmetics, skin-restorative tonics, and lightweight everyday essentials delivered to your door.
            </p>

            <Link
              to="/shop"
              className="bg-rose-950 dark:bg-rose-500 hover:bg-rose-900 dark:hover:bg-rose-600 text-white font-medium px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 inline-flex items-center space-x-3 group"
            >
              <span>Explore Collection</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side: Hero Image Card */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden p-2 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm border border-rose-200/60 dark:border-neutral-700/60 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <img
                src={headerImg}
                alt="GLOW-CART Hero Collection"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80';
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Value Proposition Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-rose-100 dark:border-neutral-800 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-neutral-800 text-rose-900 dark:text-rose-300 flex items-center justify-center text-2xl shrink-0">
            <HiTruck />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-rose-950 dark:text-rose-100">Complimentary Shipping</h4>
            <p className="text-xs text-neutral-400 mt-0.5">On all orders over $50</p>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-rose-100 dark:border-neutral-800 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-neutral-800 text-rose-900 dark:text-rose-300 flex items-center justify-center text-2xl shrink-0">
            <HiShieldCheck />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-rose-950 dark:text-rose-100">Clean Formulations</h4>
            <p className="text-xs text-neutral-400 mt-0.5">100% cruelty-free & vegan</p>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-rose-100 dark:border-neutral-800 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-neutral-800 text-rose-900 dark:text-rose-300 flex items-center justify-center text-2xl shrink-0">
            <HiArrowPath />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-rose-950 dark:text-rose-100">Hassle-Free Returns</h4>
            <p className="text-xs text-neutral-400 mt-0.5">30-day money back guarantee</p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <FeaturedProducts />

    </div>
  );
}