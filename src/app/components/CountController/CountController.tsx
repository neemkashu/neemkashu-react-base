"use client";

import { FC } from "react";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  decreaseFilmById,
  increaseFilmById,
} from "../../../redux/cart/cartSlice";

export const CountController: FC<{ filmId: string }> = ({ filmId }) => {
  const amount = useAppSelector(
    (store) => store.cart.find((film) => film.id === filmId)?.amount
  );
  const dispatch = useAppDispatch();
  const increase = () => {
    dispatch(increaseFilmById({ id: filmId }));
  };
  const decrease = () => {
    dispatch(decreaseFilmById({ id: filmId }));
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={decrease} className={styles.button}>
        -
      </button>
      <span className={styles.amount}>{amount ?? 0}</span>
      <button onClick={increase} className={styles.button}>
        +
      </button>
    </div>
  );
};
