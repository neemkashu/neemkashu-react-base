import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmResponse } from "../films/filmApi";

interface FilterSliceState {
  filteredFilmList: FilmResponse[];
}

const initialState: FilterSliceState = {
  filteredFilmList: [],
};

export const filterSlice = createSlice({
  name: "filteredList",
  initialState,
  reducers: {
    addInitialList(state, action: PayloadAction<FilmResponse[]>) {
      state.filteredFilmList = action.payload;
    },
  },
});

export const { addInitialList } = filterSlice.actions;
