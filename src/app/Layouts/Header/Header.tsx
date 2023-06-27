"use client";

import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { filmApi, useGetFilmsQuery } from "../../../redux/films/filmApi";
import { TotalAmountSelector } from "../../../redux/selectors";

const BACKET_ALT = "перейти к корзине";
const LINKS = {
  main: "./",
  basket: "./cart",
};

export const Header: FC = () => {
  // TODO: start films query in separate wrapper
  const dispatch = useAppDispatch();
  dispatch(filmApi.endpoints.getFilms.initiate());
  // const { data } = useGetFilmsQuery();
  const totalFilmInCart = useAppSelector(TotalAmountSelector);
  return (
    <header className={styles.header}>
      <Link href={LINKS.main}>
        <h1>Билетопоиск</h1>
      </Link>
      <Link href={LINKS.basket}>
        <div className={styles.cart}>
          <div className={styles["cart-box"]}>{totalFilmInCart}</div>
          <Image src={"/basket.svg"} alt={BACKET_ALT} width={32} height={32} />
        </div>
      </Link>
    </header>
  );
};
