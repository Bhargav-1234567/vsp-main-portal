// src/store/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiBase = process.env.REACT_APP_API_URL;
export const apiSlice = createApi({
  reducerPath: "api", // unique key for store
  baseQuery: fetchBaseQuery({
    baseUrl: apiBase || "https://vsp-backend-q30d.onrender.com",
  }),
  endpoints: (builder) => ({
    getInitialData: builder.query({
      query: () => "/open-json",
    }),
  }),
});

// export hook
export const { useGetInitialDataQuery } = apiSlice;
