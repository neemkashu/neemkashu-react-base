import { FilmResponse, filmApi } from "./films/filmApi";
import { RootState } from "./types";

type SearchSelector = (state: RootState) => string;
type CartFilmsSelector = (
  state: RootState
) => ({ film: FilmResponse | null } & { amount: number })[];

export const selectSearchText: SearchSelector = (state) =>
  state.search.searchText;
