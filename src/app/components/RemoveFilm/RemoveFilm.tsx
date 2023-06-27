"use client";

import { FC, useRef } from "react";
import styles from "./style.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { removeFilmById } from "../../../redux/cart/cartSlice";
import { createPortal } from "react-dom";
import { MODAL_LAYER_ID } from "../../../utils/constants";
import { useCardModal } from "../Modals/hooks";
import { ModalCard } from "../Modals/ModalCard";
import { ButtonCross } from "../Modals/Button";

function checkModalContainerIsNonNull<T>(element: T | null): element is T {
  if (!element) return false;
  return true;
}

export const RemoveFilm: FC<{ id: string }> = ({ id }) => {
  const modalContainer = useRef(document.querySelector(`.${MODAL_LAYER_ID}`));
  const { button: Button, isModalVisible, modalHandler } = useCardModal();
  const dispatch = useAppDispatch();
  const handlerYes = () => {
    dispatch(removeFilmById(id));
    modalHandler();
  };
  const handlerNo = () => {
    modalHandler();
  };

  const modal = (
    <ModalCard onClose={modalHandler}>
      <ButtonCross onClick={handlerYes}>Да</ButtonCross>
      <ButtonCross onClick={handlerNo}>Нет</ButtonCross>
    </ModalCard>
  );
  return (
    <>
      {Button}
      {isModalVisible && checkModalContainerIsNonNull(modalContainer.current)
        ? createPortal(modal, modalContainer.current)
        : null}
    </>
  );
};
