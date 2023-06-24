import { FC } from "react";
import styles from "./style.module.css";
import { FilmInfo } from "./FilmInfo/FilmInfo";
import { FilmComments } from "./FilmComments/FilmComments";
import { Comment } from "./Comment/Comment";

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
  comments: {
    name: string;
    image: string;
    rating: string;
    description: string;
  };
};

export const FilmCard: FC<FilmProps> = ({ details, comments }) => {
  return (
    <div className={styles.wrapper}>
      <FilmInfo {...details} />
      <FilmComments>
        <Comment {...comments}></Comment>
      </FilmComments>
    </div>
  );
};
