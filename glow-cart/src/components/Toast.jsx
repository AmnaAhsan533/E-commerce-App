import React from 'react';

export default function Toast({ visible, message }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-neutral-900/95 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-neutral-700/80 backdrop-blur-md animate-bounce-short transition-all duration-300">
      <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
      <p className="text-xs font-medium tracking-wide">{message}</p>
    </div>
  );
}