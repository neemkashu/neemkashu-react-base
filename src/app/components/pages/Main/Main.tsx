"use client";

import { useGetFilmsQuery } from "../../../../redux/films/filmApi";
import { WrapperCard } from "../../containers/WrapperCard/WrapperCard";
import { FilmCard } from "../../FilmCardShort/FilmCardShort";
import { FilterList } from "../../Filters/FilterList";
import styles from "./style.module.css";

const FilmsMock = [
  {
    title: "Властелин колец",
    genre: "фентези",
    image: "/poster.png",
    id: "1",
  },
  {
    title: "Властелин колец",
    genre: "фентези",
    image: "/poster.png",
    id: "2",
  },
  {
    title: "Властелин колец",
    genre: "фентези",
    image: "/poster.png",
    id: "3",
  },
];

export default function Main() {
  const { data, isLoading } = useGetFilmsQuery();
  console.log("data", data);

  return (
    <div className={styles.main}>
      <WrapperCard>
        <FilterList />
      </WrapperCard>
      <div className={styles.list}>
        {FilmsMock.map(({ title, genre, image, id }) => (
          <FilmCard key={id} title={title} image={image} genre={genre} />
        ))}
      </div>
    </div>
  );
}
