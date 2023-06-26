"use client";

import { FC, useId, useState } from "react";
import styles from "./style.module.css";

export const RadioList: FC<{
  list: string[];
  name: string;
  value: string;
  handler: (newValue: string) => void;
}> = ({ list, name, value, handler }) => {
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
              checked={value === item}
            ></input>
            <label htmlFor={id}>{item}</label>
          </div>
        );
      })}
    </div>
  );
};
