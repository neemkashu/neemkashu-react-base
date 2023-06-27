import { FC } from "react";
import styles from "./style.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { removeFilmById } from "../../../redux/cart/cartSlice";

export const RemoveFilm: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const handler = () => {
    dispatch(removeFilmById(id));
  };
  const modal = null;
  return (
    <>
      <button className={styles.button} onClick={handler}>
        x
      </button>
    </>
  );
};
