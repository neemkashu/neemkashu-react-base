"use client";

import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { DropDown } from "./DropDown";
import { useAppDispatch } from "../../../../../redux/hooks";

type DropDownContextType = {
  name: string;
  list: string[];
  chosenValue: string;
  setChosenValue: Dispatch<SetStateAction<string>> | null;
};

export const DropDownContext = createContext<DropDownContextType>({
  name: "",
  list: [],
  chosenValue: "",
  setChosenValue: null,
});

const DropDownProvider: FC<DropDownContextType & PropsWithChildren> = ({
  name,
  list,
  chosenValue,
  setChosenValue,
  children,
}) => {
  return (
    <DropDownContext.Provider
      value={{
        name,
        list,
        chosenValue,
        setChosenValue,
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

export const useDropDownContext = (): DropDownContextType => {
  const context = useContext(DropDownContext);
  if (context === undefined) {
    throw new Error(
      "useMyComponentContext must be used within a MyComponentProvider"
    );
  }
  return context;
};

export const DropDownFilter: FC<{ name: string; list: string[] }> = ({
  name: nameInitial,
  list: listInitial,
}) => {
  const [chosenValue, setChosenValue] = useState("");
  const uncheckValue = "Не выбран";
  const showList = [uncheckValue, ...listInitial];
  return (
    <DropDownProvider
      name={nameInitial}
      setChosenValue={setChosenValue}
      list={showList}
      chosenValue={chosenValue}
    >
      <DropDown />
    </DropDownProvider>
  );
};
