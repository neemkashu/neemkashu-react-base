import { FC } from "react";
import styles from "./style.module.css";
import { Filter } from "./Filter/Filter";

const FilterConfig = [
  { name: "Название", isDropDown: false },
  { name: "Жанр", isDropDown: true },
  { name: "Кинотеатр", isDropDown: true },
];

export const FilterList: FC = () => {
  return (
    <div className={styles.filters}>
      <h2>Фильтры поиска</h2>
      {FilterConfig.map(({ name, isDropDown }) => (
        <Filter key={name} name={name} isDropType={isDropDown} />
      ))}
    </div>
  );
};
