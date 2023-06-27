"use client";

import { FC } from "react";
import styles from "./style.module.css";
import { FilmInfo } from "./FilmInfo/FilmInfo";
import { FilmResponse } from "../../../redux/films/filmApi";
import { CommentList } from "./Comment/CommentList";

export const FilmCard: FC<FilmResponse> = (details) => {
  const { id } = details;
  return (
    <div className={styles.wrapper}>
      <FilmInfo {...details} />
      <div className={styles.wrapper}>
        <CommentList filmId={id} />
      </div>
    </div>
  );
};
