// src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const jsonSlice = createSlice({
  name: "json",
  initialState: { siteData: {} },
  reducers: {
    initialSiteData: (state, action) => {
      state.siteData = action.payload;
    },
  },
});

export const { initialSiteData } = jsonSlice.actions;
export default jsonSlice.reducer;
