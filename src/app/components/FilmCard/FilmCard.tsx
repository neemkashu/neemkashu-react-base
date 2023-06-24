import { FC } from "react";
import styles from "./style.module.css";
import { FilmInfo } from "./FilmInfo/FilmInfo";
import { FilmComments } from "./FilmComments/FilmComments";
import { Comment } from "./Comment/Comment";

type CommentType = {
  id: string;
  name: string;
  image: string;
  rating: string;
  description: string;
};

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
  comments: CommentType[];
};

export const FilmCard: FC<FilmProps> = ({ details, comments }) => {
  return (
    <div className={styles.wrapper}>
      <FilmInfo {...details} />
      <FilmComments>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment}></Comment>
        ))}
      </FilmComments>
    </div>
  );
};