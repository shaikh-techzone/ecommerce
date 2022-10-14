import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { errors, success } from "../../utilities";

const initialState = {
  isLoading: false,
  user: {},
  error: "",
  reloadKey: Math.random(),
};

export const login = createAsyncThunk("auth/login", ({ url, userInfo }) => {
  return axios(url, {
    method: "POST",
    data: JSON.stringify(userInfo),
  })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => error.message);
});

export const fetchLoggedInUserDetails = createAsyncThunk(
  "auth/fetchLoggedInUserDetails",
  () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("user"))?.user?.id;
    return axios(
      `/api/users/${loggedInUserId}?populate=shippingAddress, billingAddress`
    )
      .then(({ data }) => {
        return data;
      })
      .catch((error) => error.message);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = {};
      localStorage.removeItem("user");
      state.reloadKey = Math.random();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { type, payload }) => {
      state.isLoading = false;
      if (typeof payload !== "object") {
        errors("Invalid identifier or password");
        return;
      }
      if ("jwt" in payload) {
        state.user = payload;
        localStorage.setItem("user", JSON.stringify(payload));
        state.reloadKey = Math.random();
        success("Successfully Login");
      }
    });

    builder.addCase(fetchLoggedInUserDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchLoggedInUserDetails.fulfilled,
      (state, { type, payload }) => {
        state.isLoading = false;
        const user = JSON.parse(localStorage.getItem("user"));
        state.user = {
          jwt: user.jwt,
          user: {
            ...user.user,
            billingAddress: payload.billingAddress,
            shippingAddress: payload.shippingAddress,
          },
        };
        localStorage.setItem("user", JSON.stringify(state.user));
        state.reloadKey = Math.random();
      }
    );
    builder.addCase(
      fetchLoggedInUserDetails.rejected,
      (state, { type, payload }) => {
        state.isLoading = false;
        state.error = payload;
      }
    );
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
