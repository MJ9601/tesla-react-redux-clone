import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  allProduct: [],
  status: "idle",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setAllProduct: (state, action) => {
      state.product = action.payload;
    },
    unSetProduct: (state) => {
      state.product = null;
    },
  },
});

export const { setProduct, unSetProduct, setAllProduct } = productSlice.actions;

export const selectProduct = (state) => state.product.product;
export const selectAllProduct = (state) => state.product.allProduct;

export default productSlice.reducer;
