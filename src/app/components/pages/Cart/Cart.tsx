"use client";

import { FC } from "react";
import styles from "./style.module.css";
import { FilmCardShort } from "../../FilmCardShort/FilmCardShort";
import { useCartFilms } from "./hooks";
import { TotalCart } from "./TotalCart/TotalCart";

export const Cart: FC = () => {
  const films = useCartFilms();
  return (
    <div className={styles.cart}>
      {films?.length ? (
        <>
          <div className={styles.list}>
            {films
              .filter(({ film }) => film)
              .map(({ amount, film }) => {
                if (!film) return null;
                const { id, title, posterUrl, genre } = film;
                return (
                  <FilmCardShort
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
        </>
      ) : (
        <p className={styles.empty}>В корзине пока пусто</p>
      )}
    </div>
  );
};
