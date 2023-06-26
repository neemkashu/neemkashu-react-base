import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterSliceState {
  genre: string;
  cinema: string;
}

const initialState: FilterSliceState = {
  genre: "",
  cinema: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    updateCinema(state, action: PayloadAction<string>) {
      state.cinema = action.payload;
    },
  },
});

export const { updateCinema, updateGenre } = filterSlice.actions;
