import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { CountController } from "../CountController/CountController";
import { InfoField } from "./InfoField/InfoField";

type FilmProps = {
  title: string;
  genre: string;
  image: string;
  year: string;
  rating: string;
  director: string;
  description: string;
};

export const FilmCard: FC<FilmProps> = ({
  title,
  genre,
  image,
  year,
  rating,
  director,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image} alt="" width={400} height={500} />
      <div className={styles.info}>
        <div className={styles["wrapper-title"]}>
          <span>{title}</span>
          <CountController />
        </div>
        <InfoField field="Жанр" value={genre} />
        <InfoField field="Год выпуска" value={year} />
        <InfoField field="Рейтинг" value={rating} />
        <InfoField field="Режиссёр" value={director} />
        <div className={styles["wrapper-description"]}>
          <span className={styles["description-field"]}>Описание</span>
          <span className={styles["description-info"]}>{description}</span>
        </div>
      </div>
    </div>
  );
};
