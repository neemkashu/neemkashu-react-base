"use client";

import { FC, useRef } from "react";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  decreaseFilmById,
  increaseFilmById,
} from "../../../redux/cart/cartSlice";
import {
  DEFAULT_TICKET_AMOUNT,
  MAX_TICKET_AMOUNT,
  MIN_TICKET_AMOUNT,
  MODAL_LAYER_ID,
} from "../../../utils/constants";
import { useModalNotification } from "../Modals/hooks";
import { checkModalContainerIsNonNull } from "../RemoveFilm/RemoveFilm";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

export const CountController: FC<{ filmId: string }> = ({ filmId }) => {
  const modalContainer = useRef(document.querySelector(`.${MODAL_LAYER_ID}`));
  const amount = useAppSelector(
    (store) => store.cart.find((film) => film.id === filmId)?.amount
  );
  const path = usePathname();
  const notify = path === "/cart";
  console.log("notify", notify);

  const { isModalVisible, modal, setIsModalVisible } =
    useModalNotification(filmId);
  const dispatch = useAppDispatch();
  const increase = () => {
    dispatch(increaseFilmById({ id: filmId }));
  };
  const decrease = () => {
    console.log("amount", amount);

    if (amount === 1) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
      dispatch(decreaseFilmById({ id: filmId }));
    }
  };
  return (
    <div className={styles.wrapper}>
      <button
        disabled={(amount ?? DEFAULT_TICKET_AMOUNT) <= MIN_TICKET_AMOUNT}
        onClick={decrease}
        className={styles.button}
      >
        -
      </button>
      <span className={styles.amount}>{amount ?? DEFAULT_TICKET_AMOUNT}</span>
      <button
        disabled={(amount ?? DEFAULT_TICKET_AMOUNT) >= MAX_TICKET_AMOUNT}
        onClick={increase}
        className={styles.button}
      >
        +
      </button>
      {notify &&
      isModalVisible &&
      checkModalContainerIsNonNull(modalContainer.current)
        ? createPortal(modal, modalContainer.current)
        : null}
    </div>
  );
};
