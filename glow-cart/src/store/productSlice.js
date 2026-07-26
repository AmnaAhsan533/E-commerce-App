import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// 1. CREATE THE ASYNC THUNK (API Request)
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Fetching blush products (or lip_liner, mascara, foundation, etc.)
    const response = await fetch(
      'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush'
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch makeup products from server');
    }
    
    const data = await response.json();
    return data; // Array of product objects from Makeup API
  }
);

// define the slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  
  // 3. EXTRA REDUCERS FOR ASYNC THUNK
  extraReducers: (builder) => {
    builder
      // Stage 1: Loading started
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Stage 2: Data received successfully
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Saves array of makeup products
      })
      // Stage 3: Network error occurred
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;