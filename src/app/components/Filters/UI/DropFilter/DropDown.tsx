"use client";

import { FC, useState } from "react";
import styles from "../style.module.css";
import classNames from "classnames";
import { DropButton } from "../../../DropButton/DropButton";
import { RadioList } from "./RadioList/RadioList";
import { useDropDownContext } from "./DropFilter";
import { useAppDispatch } from "../../../../../redux/hooks";
import { updateGenre } from "../../../../../redux/filters/filtersSlice";
import { Dictionary } from "../../../../../dictionary/dictionary";

export const DropDown: FC = () => {
  const { chosenValue, setChosenValue, name } = useDropDownContext();

  const defaultValue = `Выберете ${name.toLowerCase()}`;
  const uncheckValue = "Не выбран";
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.filter}>
        <label className={styles.label} htmlFor={name}>
          {name}
        </label>
        <input
          className={classNames(styles.input, styles.label)}
          id={name}
          value={chosenValue === uncheckValue ? defaultValue : chosenValue}
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
          handler={(newValue: string) => {
            dispatch(updateGenre(newValue === uncheckValue ? "" : newValue));
            setChosenValue && setChosenValue(newValue);
          }}
        />
      ) : null}
    </>
  );
};
