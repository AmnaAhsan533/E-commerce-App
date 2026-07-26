import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useToast } from '../context/ToastContext';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif text-rose-950 font-bold">Product Not Found</h2>
        <Link to="/shop" className="text-rose-600 underline text-sm font-medium">
          ← Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/shop" className="text-xs text-rose-800 font-semibold uppercase tracking-wider mb-8 block hover:underline">
        ← Back to Catalog
      </Link>

      <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-rose-50/50 rounded-2xl p-6 flex items-center justify-center">
          <img src={product.api_featured_image} alt={product.name} className="max-h-80 object-contain" />
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-rose-500">{product.brand || 'Glowhaus'}</span>
            <h1 className="text-3xl font-serif font-bold text-neutral-900 mt-1">{product.name}</h1>
            <p className="text-2xl font-bold text-rose-950 mt-4">${product.price || '14.00'}</p>
            <p className="text-xs text-neutral-500 mt-4 leading-relaxed line-clamp-4">
              {product.description || 'Formulated with organic botanical extracts to maintain long-lasting skin moisture and vibrant natural tones.'}
            </p>
          </div>

          <button
            onClick={() => {
              dispatch(addToCart(product));
              showToast(`Added ${product.name.slice(0, 20)}... to bag! ✨`);
            }}
            className="w-full bg-rose-950 text-white py-4 rounded-2xl font-medium hover:bg-rose-900 transition active:scale-95 shadow-md"
          >
            Add to Shopping Bag
          </button>
        </div>
      </div>
    </div>
  );
}