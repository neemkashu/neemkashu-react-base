import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_TICKET_AMOUNT, MIN_TICKET_AMOUNT } from "../../utils/constants";

type CartSliceState = { id: string; amount: number };

const initialState: CartSliceState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseFilmById(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filmIndex = state.findIndex((film) => film.id === id);
      if (filmIndex !== -1 && state[filmIndex].amount < MAX_TICKET_AMOUNT) {
        state[filmIndex].amount += 1;
      } else {
        state.push({ id, amount: 1 });
      }
    },
    decreaseFilmById(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filmIndex = state.findIndex((film) => film.id === id);
      if (filmIndex === -1) return;
      if (state[filmIndex].amount !== MIN_TICKET_AMOUNT + 1) {
        state[filmIndex].amount -= 1;
      } else {
        state.splice(filmIndex, 1);
      }
    },
    removeFilmById(state, action: PayloadAction<string>) {
      const id = action.payload;
      const filmIndex = state.findIndex((film) => film.id === id);
      if (filmIndex === -1) return;
      state[filmIndex].amount = 0;
    },
  },
});

export const { increaseFilmById, decreaseFilmById, removeFilmById } =
  cartSlice.actions;
