import { FC } from "react";
import styles from "./style.module.css";
import classNames from "classnames";

type FilterProps = {
  name: string;
};

export const Filter: FC<FilterProps> = ({ name }) => {
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
    </div>
  );
};
