"use client";

import { ChangeEventHandler, FC } from "react";
import classNames from "classnames";
import styles from "../style.module.css";

type FilterProps = {
  name: string;
  handler: (text: string) => void;
};

export const TypeFilter: FC<FilterProps> = ({ name, handler }) => {
  const typeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    handler(event.target?.value ?? "");
  };
  return (
    <div className={styles.filter}>
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
      <input
        className={classNames(styles.input, styles.label)}
        id={name}
        type="text"
        onChange={typeHandler}
      />
    </div>
  );
};
