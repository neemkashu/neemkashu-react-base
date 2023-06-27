"use client";

import { FC } from "react";
import styles from "./style.module.css";
import { FilmCardShort } from "../../FilmCardShort/FilmCardShort";
import { useCartFilms } from "./hooks";
import { TotalCart } from "./TotalCart/TotalCart";
import { RemoveFilm } from "../../RemoveFilm/RemoveFilm";
import { useAppSelector } from "../../../../redux/hooks";
import { TotalAmountSelector } from "../../../../redux/selectors";

export const Cart: FC = () => {
  const films = useCartFilms();
  const amount = useAppSelector(TotalAmountSelector);
  return (
    <div className={styles.cart}>
      {films?.length && !(amount < 1) ? (
        <>
          <div className={styles.list}>
            {films
              .filter(({ film }) => film)
              .map(({ amount, film }) => {
                if (!film || amount < 1) return null;
                const { id, title, posterUrl, genre } = film;
                return (
                  <FilmCardShort
                    key={id}
                    id={id}
                    title={title}
                    posterUrl={posterUrl}
                    genre={genre}
                  >
                    <RemoveFilm id={id} />
                  </FilmCardShort>
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
