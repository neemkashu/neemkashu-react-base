import { FC } from "react";
import styles from "./style.module.css";

type InfoProps = {
  field: string;
  value: string;
  invert?: boolean;
};

export const InfoField: FC<InfoProps> = ({ field, value, invert }) => {
  return (
    <div className={styles.info}>
      <span className={invert ? styles.value : styles.field}>{field}:</span>
      <span className={invert ? styles.field : styles.value}>{value}</span>
    </div>
  );
};
