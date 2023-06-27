"use client";

import {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import styles from "./button.module.css";
import Image from "next/image";

type ButtonProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    handler?: MouseEventHandler;
  };

export const ButtonCross: FC<ButtonProps> = ({
  handler,
  children,
  ...rest
}) => {
  return (
    <button {...rest} className={styles["button-cross"]}>
      {children}
    </button>
  );
};
