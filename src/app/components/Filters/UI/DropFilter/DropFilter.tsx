"use client";

import { FC } from "react";
import styles from "../style.module.css";
import classNames from "classnames";
import { DropButton } from "../../../DropButton/DropButton";

type FilterProps = {
  name: string;
};

export const DropFilter: FC<FilterProps> = ({ name }) => {
  return (
    <div className={styles.filter}>
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
      <input
        className={classNames(styles.input, styles.label)}
        id={name}
        type="text"
      />
      <div className={styles.relative}>
        <DropButton handler={() => {}} size={20} />
      </div>
    </div>
  );
};
