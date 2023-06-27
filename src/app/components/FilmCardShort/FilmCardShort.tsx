import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { CountController } from "../CountController/CountController";
import { FilmResponse } from "../../../redux/films/filmApi";
import Link from "next/link";

export const FilmCardShort: FC<
  Pick<FilmResponse, "title" | "genre" | "posterUrl" | "id"> & PropsWithChildren
> = ({ title, genre, posterUrl: image, id, children }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image} alt="" width={100} height={150} />
      <div className={styles.info}>
        <Link href={`/${id}`}>
          <span className={styles.title}>{title}</span>
        </Link>
        <span className={styles.genre}>{genre}</span>
      </div>
      <CountController filmId={id} />
      {children}
    </div>
  );
};
