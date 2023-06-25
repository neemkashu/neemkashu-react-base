import { FC } from "react";
import styles from "./style.module.css";
import { DropFilter } from "./UI/DropFilter/DropFilter";
import { SearchFilter } from "./SearchFilter/SearchFilter";

export const FilterList: FC = () => {
  return (
    <div className={styles.filters}>
      <h2>Фильтры поиска</h2>
      <SearchFilter />
      <DropFilter name={"Жанр"} />
      <DropFilter name={"Кинотеатр"} />
    </div>
  );
};
