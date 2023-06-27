"use client";

import { MouseEventHandler, useState } from "react";
import { ButtonCross } from "./Button";
import Image from "next/image";

export const useCardModal = (): {
  button: JSX.Element;
  isModalVisible: boolean;
  modalHandler: () => void;
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
  };
};
