"use client";

import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { ButtonCross } from "./Button";
import Image from "next/image";
import { useAppDispatch } from "../../../redux/hooks";
import { removeFilmById } from "../../../redux/cart/cartSlice";
import { ModalCard } from "./ModalCard";

export const useCardModal = (): {
  button: JSX.Element;
  isModalVisible: boolean;
  modalHandler: () => void;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
} => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDetails: MouseEventHandler = () => {
    setIsModalVisible(true);
  };

  return {
    button: (
      <ButtonCross typage={"cross"} onClick={handleDetails}>
        <Image
          alt="удалить из корзины"
          src={"./cross.svg"}
          width={20}
          height={20}
        />
      </ButtonCross>
    ),
    isModalVisible,
    modalHandler: (): void => setIsModalVisible(false),
    setIsModalVisible: setIsModalVisible,
  };
};

export const useModalNotification = (id: string) => {
  const {
    button: Button,
    isModalVisible,
    modalHandler,
    setIsModalVisible,
  } = useCardModal();
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
      <ButtonCross typage={"yes"} onClick={handlerYes}>
        Да
      </ButtonCross>
      <ButtonCross typage={"no"} onClick={handlerNo}>
        Нет
      </ButtonCross>
    </ModalCard>
  );

  return {
    modalHandler,
    modal,
    button: Button,
    isModalVisible,
    setIsModalVisible,
  };
};
