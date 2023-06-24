import { FC } from "react";
import styles from "./style.module.css";
import { FilmInfo } from "./FilmInfo/FilmInfo";
import { FilmComments } from "./FilmComments/FilmComments";

type FilmProps = {
  details: {
    title: string;
    genre: string;
    image: string;
    year: string;
    rating: string;
    director: string;
    description: string;
  };
  comments: string;
};

export const FilmCard: FC<FilmProps> = ({ details, comments }) => {
  return (
    <div className={styles.wrapper}>
      <FilmInfo {...details} />
      <FilmComments comments={comments} />
    </div>
  );
};
