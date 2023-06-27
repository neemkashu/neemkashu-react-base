"use client";

import { WrapperCard } from "../../containers/WrapperCard/WrapperCard";
import { FilmList } from "../../FilmList/FilmList";
import { FilterList } from "../../Filters/FilterList";
import styles from "./style.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <WrapperCard>
        <FilterList />
      </WrapperCard>
      <div className={styles.list}>
        <FilmList />
      </div>
    </div>
  );
}
