import { FC } from "react";
import styles from "./style.module.css";
import { FilmInfo } from "./FilmInfo/FilmInfo";
import { Comment } from "./Comment/Comment";
import { FilmResponse } from "../../../redux/films/filmApi";

type CommentType = {
  id: string;
  name: string;
  image: string;
  rating: string;
  description: string;
};

type FilmProps = {
  details: FilmResponse;
  comments: CommentType[];
};

export const FilmCard: FC<FilmProps> = ({ details, comments }) => {
  return (
    <div className={styles.wrapper}>
      <FilmInfo {...details} />
      <div className={styles.wrapper}>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment}></Comment>
        ))}
      </div>
    </div>
  );
};
