import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TOKEN } from "../../utils";

const initialState = {
  isLoading: false,
  products: [],
  error: "",
  meta: {},
};

// const TOKEN = process.env.REACT_APP_STRAPI_TOKEN;
// http://localhost:1337/api/products
export const fetchProducts = createAsyncThunk("user/fetchProducts", (url) => {
  return axios(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    method: "GET",
  })
    .then(({ data }) => {
      data.data = data.data.map((d) => ({ ...d.attributes, id: d.id }));
      return { data: data.data, meta: data.meta };
    })
    .catch((error) => error.message);
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { type, payload }) => {
      state.isLoading = false;
      state.products = payload.data;
      state.meta = payload.meta;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
