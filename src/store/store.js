// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import jsonReducer from "./jsonSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    json: jsonReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
