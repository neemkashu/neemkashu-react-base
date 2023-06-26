import { FC } from "react";
import styles from "./style.module.css";
import { DropDown } from "./UI/DropFilter/DropDown";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Dictionary } from "../../../dictionary/dictionary";
import { DropDownFilter } from "./UI/DropFilter/DropFilter";

const GenreList = Object.values(Dictionary.GENRES);

export const FilterList: FC = () => {
  return (
    <div className={styles.filters}>
      <h2>Фильтры поиска</h2>
      <SearchFilter />
      <DropDownFilter name={"Жанр"} list={GenreList} />
      <DropDownFilter name={"Кинотеатр"} list={GenreList} />
    </div>
  );
};
