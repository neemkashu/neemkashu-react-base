import { FC, PropsWithChildren } from "react";
import styles from "./style.module.css";

export const FilmComments: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
