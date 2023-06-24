"use client";

import { FC, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import classNames from "classnames";

const ARROW_ALT = "узнать больше";

export const DropButton: FC<{ handler: () => void; size?: number }> = ({
  handler,
  size,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonHandler = () => {
    handler();
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={buttonHandler}
      className={classNames(styles.button, {
        [styles["button__active"]]: isOpen,
      })}
    >
      <Image
        src={"/arrow.svg"}
        alt={ARROW_ALT}
        width={size ?? 32}
        height={size ?? 32}
      />
    </button>
  );
};
