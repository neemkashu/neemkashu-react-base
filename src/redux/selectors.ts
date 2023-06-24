import { FilmResponse } from "./films/filmApi";
import { RootState } from "./types";

type SearchSelector = (state: RootState) => string;

export const selectSearchText: SearchSelector = (state) =>
  state.search.searchText;
