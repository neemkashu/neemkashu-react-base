"use client";

import { FC } from "react";
import { FilmCard } from "../FilmCardShort/FilmCardShort";
import { useFilteredFilms } from "../Filters/hooks/hooks";

export const FilmList: FC = () => {
  const { data, isLoading } = useFilteredFilms();
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
