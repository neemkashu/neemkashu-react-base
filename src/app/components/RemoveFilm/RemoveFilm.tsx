"use client";

import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { MODAL_LAYER_ID } from "../../../utils/constants";
import { useModalNotification } from "../Modals/hooks";

export function checkModalContainerIsNonNull<T>(
  element: T | null
): element is T {
  if (!element) return false;
  return true;
}

export const RemoveFilm: FC<{ id: string }> = ({ id }) => {
  const modalContainer = useRef(document.querySelector(`.${MODAL_LAYER_ID}`));
  const { button, isModalVisible, modal } = useModalNotification(id);
  return (
    <>
      {button}
      {isModalVisible && checkModalContainerIsNonNull(modalContainer.current)
        ? createPortal(modal, modalContainer.current)
        : null}
    </>
  );
};
