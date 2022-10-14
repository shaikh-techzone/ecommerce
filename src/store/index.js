import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import authReducer from "./slices/authSlice"
import orderReducer from "./slices/orderSlice"
// import reduxLogger from 'redux-logger';

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    order: orderReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
