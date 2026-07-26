import { createSlice } from '@reduxjs/toolkit';

// 1. DEFINE INITIAL STATE
const initialState = {
  items: [],        // Array of products in cart: [{ id, name, price, image, quantity }]
  isCartOpen: false, // Controls whether the cart drawer overlay is open or closed
};

// 2. DEFINE THE CART SLICE
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action 1: Toggle the Cart Drawer open/closed
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    // Action 2: Add an item to the bag
    addToCart: (state, action) => {
      const product = action.payload; // The product object passed when dispatching
      
      // Check if item already exists in cart
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // If it exists, just increment its quantity!
        existingItem.quantity += 1;
      } else {
        // If it's new, push it with an initial quantity of 1
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price ? parseFloat(product.price) : 12.00,
          image: product.api_featured_image,
          quantity: 1,
        });
      }
    },

    // Action 3: Remove an item entirely by ID
    removeFromCart: (state, action) => {
      const idToRemove = action.payload; // The product ID passed when dispatching
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },

    // Action 4: Update item quantity (+ or -)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload; // { id: 495, quantity: 2 }
      const item = state.items.find((item) => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

    // Action 5: Empty the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// 3. EXPORT ACTIONS AND REDUCER
// Redux Toolkit automatically generates action creators for every function in `reducers`!
export const { 
  toggleCart, 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;