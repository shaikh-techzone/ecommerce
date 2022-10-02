import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  products: [],
  error: '',
  meta: {},
  productsInCart: [],
  isLoadingCart: false,
  errorCart: '',
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (url) => {
    try {
      const { data } = await axios(url);
      return { products: data.data, meta: data.meta.pagination };
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchCartProductsList = createAsyncThunk(
  'product/fetchCartProductsList',
  async (url) => {
    try {
      const { data } = await axios(url);
      return data.data;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { type, payload }) => {
      state.isLoading = false;
      state.products = payload.products;
      state.meta = payload.meta;
    });
    builder.addCase(fetchProducts.rejected, (state, { type, payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(fetchCartProductsList.pending, (state) => {
      state.isLoadingCart = true;
    });
    builder.addCase(
      fetchCartProductsList.fulfilled,
      (state, { type, payload }) => {
        state.isLoadingCart = false;
        state.productsInCart = payload;
        state.meta = payload.meta;
      }
    );
    builder.addCase(
      fetchCartProductsList.rejected,
      (state, { type, payload }) => {
        state.isLoadingCart = false;
        state.errorCart = payload;
      }
    );
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
