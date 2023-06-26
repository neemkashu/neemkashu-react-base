import { FC } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { CountController } from "../CountController/CountController";
import { FilmResponse } from "../../../redux/films/filmApi";

export const FilmCard: FC<
  Pick<FilmResponse, "title" | "genre" | "posterUrl" | "id">
> = ({ title, genre, posterUrl: image, id }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image} alt="" width={100} height={150} />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.genre}>{genre}</span>
      </div>
      <CountController filmId={id} />
    </div>
  );
};
