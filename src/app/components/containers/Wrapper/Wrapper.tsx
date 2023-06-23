import { FC, PropsWithChildren } from "react";
import styles from "./style.module.css";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
