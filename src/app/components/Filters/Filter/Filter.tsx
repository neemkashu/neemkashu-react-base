"use client";

import { FC } from "react";
import styles from "./style.module.css";
import classNames from "classnames";
import { DropButton } from "../../DropButton/DropButton";

type FilterProps = {
  name: string;
  isDropType?: boolean;
};

export const Filter: FC<FilterProps> = ({ name, isDropType }) => {
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
      {isDropType ? (
        <div className={styles.relative}>
          <DropButton handler={() => {}} size={20} />
        </div>
      ) : null}
    </div>
  );
};
