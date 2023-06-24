import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./films/filmApi";
import { searchSlice } from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    [filmApi.reducerPath]: filmApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});
