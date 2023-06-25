import { FC } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { CountController } from "../CountController/CountController";

type FilmProps = {
  title: string;
  genre: string;
  image: string;
};

export const FilmCard: FC<FilmProps> = ({ title, genre, image }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image} alt="" width={100} height={150} />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.genre}>{genre}</span>
      </div>
      <CountController />
    </div>
  );
};
