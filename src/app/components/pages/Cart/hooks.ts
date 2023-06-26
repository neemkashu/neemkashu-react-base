"use client";

import { filmApi } from "../../../../redux/films/filmApi";
import { useAppSelector } from "../../../../redux/hooks";

export const useCartFilms = () => {
  const { currentData: films, isLoading } =
    filmApi.endpoints.getFilms.useQueryState();

  const cart = useAppSelector((store) => store.cart);
  if (isLoading) return [];
  if (!films || films?.length < 1) return [];

  return cart.map((item) => {
    return {
      amount: item.amount,
      film: films.find((film) => film.id === item.id) ?? null,
    };
  });
};
