"use client";

import { FC } from "react";
import { FilmCardShort } from "../FilmCardShort/FilmCardShort";
import { useFilteredFilms } from "../Filters/hooks/hooks";
import styles from "./style.module.css";

export const FilmList: FC = () => {
  const { data, isLoading } = useFilteredFilms();

  if (isLoading) return <span className={styles.empty}>Loading</span>;
  if (!data || data.length === 0)
    return <span className={styles.empty}>No film was found</span>;

  return (
    <>
      {data.map(({ title, genre, posterUrl, id }) => (
        <FilmCardShort
          key={id}
          id={id}
          title={title}
          posterUrl={posterUrl}
          genre={genre}
        />
      ))}
    </>
  );
};
