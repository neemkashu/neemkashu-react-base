import { FC } from "react";
import styles from "./style.module.css";

export const CountController: FC = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>-</button>
      <span className={styles.amount}>0</span>
      <button className={styles.button}>+</button>
    </div>
  );
};
