import { FC } from "react";
import styles from "./style.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>Билетопоиск</h1>
      <a>Корзина</a>
    </header>
  );
};
