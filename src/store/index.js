import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
// import reduxLogger from 'redux-logger';

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
