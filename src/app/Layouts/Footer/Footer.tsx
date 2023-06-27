import { FC } from "react";
import styles from "./style.module.css";
import Link from "next/link";

const LINKS = {
  qa: "./qa",
  about: "./about",
};

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href={LINKS.qa}>Вопросы-ответы</Link>
      <Link href={LINKS.about}>О нас</Link>
    </footer>
  );
};
