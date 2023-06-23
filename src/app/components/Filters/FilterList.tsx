import { FC } from "react";
import styles from "./style.module.css";
import { Filter } from "./Filter/Filter";

const FilterConfig = ["Название", "Жанр", "Кинотеатр"];

export const FilterList: FC = () => {
  return (
    <div className={styles.filters}>
      <h2>Фильтры поиска</h2>
      {FilterConfig.map((filter) => (
        <Filter key={filter} name={filter} />
      ))}
    </div>
  );
};
