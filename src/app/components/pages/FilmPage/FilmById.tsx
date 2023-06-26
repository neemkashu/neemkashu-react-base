"use client";

import { FC } from "react";
import styles from "./style.module.css";
import {
  useGetMovieByIdQuery,
  useGetReviewsByIdQuery,
} from "../../../../redux/films/filmApi";
import { FilmCard } from "../../FilmCard/FilmCard";

export const FilmById: FC<{ id: string }> = ({ id }) => {
  const { data: film, isLoading, isError } = useGetMovieByIdQuery(id);
  useGetReviewsByIdQuery(id);
  console.log("film", film, { isLoading }, { isError });

  if (isLoading) return <p>Loading...</p>;
  if (!film) return <p className={styles.wrapper}>Похоже, такого фильма нет</p>;
  return <FilmCard {...film}></FilmCard>;
};
