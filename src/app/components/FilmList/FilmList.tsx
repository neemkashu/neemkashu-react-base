"use client";

import { FC } from "react";
import { useGetFilmsQuery } from "../../../redux/films/filmApi";
import { FilmCard } from "../FilmCardShort/FilmCardShort";

export const FilmList: FC = () => {
  const { data, isLoading } = useGetFilmsQuery();
  console.log("data", data);

  if (isLoading) return <span>Loading</span>;
  if (!data) return <span>No film was found</span>;

  return (
    <>
      {data.map(({ title, genre, posterUrl, id }) => (
        <FilmCard key={id} title={title} image={posterUrl} genre={genre} />
      ))}
    </>
  );
};
