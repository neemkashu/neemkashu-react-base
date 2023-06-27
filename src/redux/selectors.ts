import { FilmResponse, filmApi } from "./films/filmApi";
import { RootState } from "./types";

type SearchSelector = (state: RootState) => string;
type TotalAmountSelector = (state: RootState) => number;

export const selectSearchText: SearchSelector = (state) =>
  state.search.searchText;

export const TotalAmountSelector: TotalAmountSelector = (state) => {
  if (!state.cart || !state.cart?.length) return 0;
  return state.cart.reduce((accum, item) => (accum += item.amount), 0);
};
