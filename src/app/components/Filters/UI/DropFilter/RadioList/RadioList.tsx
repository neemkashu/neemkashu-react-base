"use client";

import { FC } from "react";
import styles from "./style.module.css";
import { useDropDownContext } from "../DropFilter";

export const RadioList: FC<{
  handler: (newValue: string) => void;
}> = ({ handler }) => {
  const { chosenValue, name, list } = useDropDownContext();
  return (
    <div>
      {list.map((item) => {
        const id = `dropdown-${item}-${name}`;
        return (
          <div key={item}>
            <input
              onChange={() => handler(item)}
              type="radio"
              id={id}
              value={item}
              name={name}
              checked={chosenValue === item}
            ></input>
            <label htmlFor={id}>{item}</label>
          </div>
        );
      })}
    </div>
  );
};
