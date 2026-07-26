import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center font-serif text-lg text-rose-950">
        ✨ Fetching botanical formulations...
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-red-500 font-medium">
        Unable to load collection: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-rose-950">Cosmetic Catalog</h2>
        <p className="text-neutral-500 text-sm mt-1">Select an item to view details or add directly to your bag.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}