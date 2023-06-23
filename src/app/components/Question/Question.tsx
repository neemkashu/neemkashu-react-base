import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { QuestionProps } from "../../utils/types";

const ARROW_ALT = "посмотреть ответ";

export const Question: FC<QuestionProps> = ({ question, answer }) => {
  return (
    <div className={styles.question}>
      <p>{question}</p>
      <button className={styles.button}>
        <Image src={"/arrow.svg"} alt={ARROW_ALT} width={32} height={32} />
      </button>
    </div>
  );
};
