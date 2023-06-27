import { FC, useRef } from "react";
import styles from "./style.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { removeFilmById } from "../../../redux/cart/cartSlice";
import { createPortal } from "react-dom";
import { MODAL_LAYER_ID } from "../../../utils/constants";

function checkModalContainerIsNonNull<T>(element: T | null): element is T {
  if (!element) return false;
  return true;
}

export const RemoveFilm: FC<{ id: string }> = ({ id }) => {
  const modalContainer = useRef(document.querySelector(MODAL_LAYER_ID));
  const dispatch = useAppDispatch();
  const handler = () => {
    dispatch(removeFilmById(id));
  };
  const modal = null;
  return (
    <>
      <button className={styles.button} onClick={handler}>
        x
      </button>
      {checkModalContainerIsNonNull(modalContainer.current)
        ? createPortal(modal, modalContainer.current)
        : null}
    </>
  );
};
