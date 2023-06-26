"use client";

import { FC } from "react";
import styles from "./style.module.css";
import { FilmCard } from "../../FilmCardShort/FilmCardShort";
import { useCartFilms } from "./hooks";
import { useAppSelector } from "../../../../redux/hooks";
import { TotalCart } from "./TotalCart/TotalCart";

export const Cart: FC = () => {
  const films = useCartFilms();
  return (
    <div className={styles.cart}>
      <div className={styles.list}>
        {films
          .filter(({ film }) => film)
          .map(({ amount, film }) => {
            if (!film) return null;
            const { id, title, posterUrl, genre } = film;
            return (
              <FilmCard
                key={id}
                id={id}
                title={title}
                posterUrl={posterUrl}
                genre={genre}
              />
            );
          })}
      </div>
      <TotalCart />
    </div>
  );
};
