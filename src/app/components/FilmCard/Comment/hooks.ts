"use client";

import {
  filmApi,
  useGetReviewsByIdQuery,
} from "../../../../redux/films/filmApi";

export function useComments(filmId: string) {
  const {
    data: comments,
    isLoading,
    isError,
  } = filmApi.endpoints.getReviewsById.useQueryState(filmId);
  return { comments, isLoading, isError };
}
