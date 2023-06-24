"use client";

import { FC, useState } from "react";
import styles from "./style.module.css";
import { QuestionProps } from "../../../../../utils/types";
import { DropButton } from "../../../DropButton/DropButton";

export const Question: FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.question}>
      <p>{question}</p>
      <DropButton handler={() => setIsOpen(!isOpen)} />
    </div>
  );
};
