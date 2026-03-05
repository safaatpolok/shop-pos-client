import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProductsByStore,
  searchProducts,
  updateProduct
} from "./productThunk";

const initialState = {
  products: [],
  product: [],
  searchResults: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder

      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product.push(action.payload);
      })

      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getProductById.fulfilled, (state, action) => {
        state.product.push(action.payload);
      })


      .addCase(updateProduct.fulfilled, (state, action) => {

        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );

        if (index !== -1) {
          state.products[index] = action.payload;
        }

      })


      .addCase(deleteProduct.fulfilled, (state, action) => {

        state.products = state.products.filter(
          (p) => p.id !== action.payload
        );

      })


      .addCase(getProductsByStore.fulfilled, (state, action) => {

        state.product.push(action.payload);

      })


      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
      })


      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product.push(action.payload);
      })


      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  }
});

export default productSlice.reducer;