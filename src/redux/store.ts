import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./films/filmApi";
import { searchSlice } from "./search/searchSlice";
import { filterSlice } from "./filters/filtersSlice";
import { cartSlice } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    filter: filterSlice.reducer,
    search: searchSlice.reducer,
    [filmApi.reducerPath]: filmApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});
