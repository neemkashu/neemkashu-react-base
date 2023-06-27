import { FC } from "react";
import styles from "./style.module.css";
import { useAppSelector } from "../../../../../redux/hooks";
import { TotalAmountSelector } from "../../../../../redux/selectors";

export const TotalCart: FC = () => {
  const amount = useAppSelector(TotalAmountSelector);
  if (amount < 1) return null;
  return (
    <div className={styles.wrapper}>
      <span>Итого билетов:</span>
      <span>{amount}</span>
    </div>
  );
};
