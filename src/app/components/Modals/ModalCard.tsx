"use client";

import { FC, PropsWithChildren } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { ButtonCross } from "./Button";
import classNames from "classnames";

export const ModalCard: FC<{ onClose: () => void } & PropsWithChildren> = ({
  onClose,
  children,
}) => {
  return (
    <div role="presentation" onClick={onClose} className={styles.shadow}>
      <div
        role="presentation"
        onClick={(event): void => {
          event.stopPropagation();
        }}
        className={styles.card}
      >
        <div className={styles["top-line"]}>
          <h3>Удаление билета</h3>
          <ButtonCross typage={"cross"} onClick={onClose}>
            <Image
              alt={"закрыть окно"}
              src={"/cross.svg"}
              width={20}
              height={20}
            />
          </ButtonCross>
        </div>
        <p className={styles.question}>Вы уверены, что хотите удалить билет?</p>
        <div className={classNames(styles["button-line"])}>{children}</div>
      </div>
    </div>
  );
};
