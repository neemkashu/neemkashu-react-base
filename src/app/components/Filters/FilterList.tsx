import { FC } from "react";
import styles from "./style.module.css";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Dictionary } from "../../../dictionary/dictionary";
import { DropDownFilter } from "./UI/DropFilter/DropFilter";
import { useGetCinemasQuery } from "../../../redux/films/filmApi";

const GenreList = Object.values(Dictionary.GENRES);

export const FilterList: FC = () => {
  const { data: cinemaList, isError, isLoading } = useGetCinemasQuery();
  return (
    <div className={styles.filters}>
      <h2>Фильтры поиска</h2>
      <SearchFilter />
      <DropDownFilter name={"Жанр"} list={GenreList} />
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>Список кинотеатров недоступен</p>
      ) : (
        <DropDownFilter
          name={"Кинотеатр"}
          list={cinemaList?.map((item) => item.name) ?? []}
        />
      )}
    </div>
  );
};
