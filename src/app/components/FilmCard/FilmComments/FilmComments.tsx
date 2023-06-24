import { FC } from "react";
import styles from "./style.module.css";

type CommentProps = {
  comments: string;
};

export const FilmComments: FC<CommentProps> = ({ comments }) => {
  return <div className={styles.wrapper}>{comments}</div>;
};
