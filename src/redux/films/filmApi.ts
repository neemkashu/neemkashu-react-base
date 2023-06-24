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

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ORIGIN,
  }),
  endpoints: ({ query }) => ({
    getFilms: query<FilmResponse, void>({
      query: () => ({
        url: "/movies",
        method: "GET",
      }),
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetFilmsQuery } = filmApi;
