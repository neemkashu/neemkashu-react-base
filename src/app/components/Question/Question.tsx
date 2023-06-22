import { FC } from "react";
import styles from "./style.module.css";
import { QuestionProps } from "../../utils/types";

export const Question: FC<QuestionProps> = ({ question, answer }) => {
  return (
    <div className={styles.question}>
      <p>{question}</p>
      <button>v</button>
    </div>
  );
};
