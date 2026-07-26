import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-rose-100 via-rose-50 to-white rounded-3xl p-8 sm:p-16 border border-rose-100 shadow-sm flex flex-col items-start justify-center min-h-[420px] relative overflow-hidden">
        <span className="text-xs uppercase font-bold tracking-widest text-rose-600 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-rose-200 mb-4">
          Botanical Formulations 2026
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-rose-950 max-w-2xl leading-tight">
          Radiance Formulated by Science & Nature
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base max-w-lg mt-4 mb-8 leading-relaxed">
          Discover high-performance cosmetics, skin-restorative tonics, and lightweight everyday essentials.
        </p>
        <Link
          to="/shop"
          className="bg-rose-950 hover:bg-rose-900 text-white font-medium px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          Explore Collection →
        </Link>
      </div>
    </div>
  );
}