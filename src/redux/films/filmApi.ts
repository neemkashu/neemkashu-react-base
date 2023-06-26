import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from "@reduxjs/toolkit/query/react";

const ORIGIN = "http://localhost:3001/api";

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export interface FilmResponse {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface CinemaResponse {
  id: string;
  name: string;
  movieIds: string[];
}

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ORIGIN,
  }),
  endpoints: ({ query }) => ({
    getFilms: query<FilmResponse[], void>({
      query: () => ({
        url: "/movies",
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getCinemas: query<CinemaResponse[], void>({
      query: () => ({
        url: "/cinemas",
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getMoviesOfCinema: query<FilmResponse[], { id: string }>({
      query: (id) => ({
        url: `/movies?cinemaId=${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getMovieById: query<FilmResponse[], { id: string }>({
      query: (id) => ({
        url: `/movies?movieId=${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetCinemasQuery,
  useGetMoviesOfCinemaQuery,
  useGetMovieByIdQuery,
} = filmApi;
