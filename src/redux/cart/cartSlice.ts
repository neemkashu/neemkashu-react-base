import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartSliceState = { id: string; amount: number };

const initialState: CartSliceState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseFilmById(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filmIndex = state.findIndex((film) => film.id === id);
      if (filmIndex !== -1) {
        state[filmIndex].amount += 1;
      } else {
        state.push({ id, amount: 1 });
      }
    },
    decreaseFilmById(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filmIndex = state.findIndex((film) => film.id === id);
      if (filmIndex === -1) return;
      if (state[filmIndex].amount !== 1) {
        state[filmIndex].amount -= 1;
      } else {
        state.splice(filmIndex, 1);
      }
    },
  },
});

export const { increaseFilmById, decreaseFilmById } = cartSlice.actions;
