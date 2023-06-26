"use client";

import { FC, useState } from "react";
import styles from "../style.module.css";
import classNames from "classnames";
import { DropButton } from "../../../DropButton/DropButton";
import { RadioList } from "./RadioList/RadioList";

export const DropDown: FC<{ name: string; list: string[] }> = ({
  name,
  list,
}) => {
  const defaultValue = `Выберете ${name.toLowerCase()}`;
  const uncheckValue = "Не выбран";
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const showList = [uncheckValue, ...list];

  return (
    <>
      <div className={styles.filter}>
        <label className={styles.label} htmlFor={name}>
          {name}
        </label>
        <input
          className={classNames(styles.input, styles.label)}
          id={name}
          value={value === uncheckValue ? defaultValue : value}
          type="text"
          placeholder={defaultValue}
          readOnly
        />
        <div className={styles.relative}>
          <DropButton
            handler={() => {
              setIsOpen((previous) => !previous);
            }}
            size={20}
          />
        </div>
      </div>
      {isOpen ? (
        <RadioList
          value={value}
          handler={(newValue: string) => setValue(newValue)}
          name={name}
          list={showList}
        />
      ) : null}
    </>
  );
};
