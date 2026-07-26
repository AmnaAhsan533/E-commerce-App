import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  // The `reducer` object holds all the slices of state for our app.
  // Right now, it's empty because we haven't created our slices yet!
  // Soon we will add:
  // reducer: {
  //   products: productsReducer,
  //   cart: cartReducer,
  // }
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});