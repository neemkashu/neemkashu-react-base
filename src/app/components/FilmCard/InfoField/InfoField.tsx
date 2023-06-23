import { FC } from "react";
import styles from "./style.module.css";

type InfoProps = {
  field: string;
  value: string;
};

export const InfoField: FC<InfoProps> = ({ field, value }) => {
  return (
    <div className={styles.info}>
      <span className={styles.field}>{field}:</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
