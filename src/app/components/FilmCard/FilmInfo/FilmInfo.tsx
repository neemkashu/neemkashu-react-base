import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { CountController } from "../../CountController/CountController";
import { InfoField } from "../InfoField/InfoField";
import { FilmResponse } from "../../../../redux/films/filmApi";

export const FilmInfo: FC<FilmResponse> = ({
  title,
  genre,
  posterUrl,
  releaseYear,
  rating,
  director,
  description,
  id,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image src={posterUrl} alt="" width={400} height={500} />
      <div className={styles.info}>
        <div className={styles["wrapper-title"]}>
          <span>{title}</span>
          <CountController filmId={id} />
        </div>
        <InfoField field="Жанр" value={genre} />
        <InfoField field="Год выпуска" value={`${releaseYear}`} />
        <InfoField field="Рейтинг" value={`${Math.round(rating)}`} />
        <InfoField field="Режиссёр" value={director} />
        <div className={styles["wrapper-description"]}>
          <span className={styles["description-field"]}>Описание</span>
          <span className={styles["description-info"]}>{description}</span>
        </div>
      </div>
    </div>
  );
};
