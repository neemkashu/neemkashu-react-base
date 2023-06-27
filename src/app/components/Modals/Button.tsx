"use client";

import {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import styles from "./button.module.css";
import classNames from "classnames";

type ButtonProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    handler?: MouseEventHandler;
  } & { typage: "cross" | "yes" | "no" };

export const ButtonCross: FC<ButtonProps> = ({
  handler,
  typage,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(styles["button-" + typage ?? ""], styles.button)}
    >
      {children}
    </button>
  );
};
