import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const BACKET_ALT = "перейти к корзине";
const LINKS = {
  main: "./",
  basket: "./basket",
};

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={LINKS.main}>
        <h1>Билетопоиск</h1>
      </Link>
      <Link href={LINKS.basket}>
        <Image src={"/basket.svg"} alt={BACKET_ALT} width={32} height={32} />
      </Link>
    </header>
  );
};
