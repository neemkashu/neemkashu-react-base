import { Dictionary } from "../../../../dictionary/dictionary";
import { filmApi, useGetFilmsQuery } from "../../../../redux/films/filmApi";
import { useAppSelector } from "../../../../redux/hooks";
import { selectSearchText } from "../../../../redux/selectors";

const isDictionaryKey = (
  genre: string
): genre is keyof typeof Dictionary.GENRES => {
  return genre in Dictionary.GENRES;
};

const useCinemaFilmList = (cinema: string) => {
  const { currentData: cinemaList } =
    filmApi.endpoints.getCinemas.useQueryState();

  const cinemaFilmList = cinemaList?.find(
    (item) => item.name === cinema
  )?.movieIds;
  return cinemaFilmList;
};

export function useFilteredFilms() {
  const { data, isLoading, isError } = useGetFilmsQuery();
  const searchQuery = useAppSelector(selectSearchText);
  const genre = useAppSelector((store) => store.filter.genre);
  const cinema = useAppSelector((store) => store.filter.cinema);
  const cinemaFilmList = useCinemaFilmList(cinema);

  if (isLoading || isError) return { data: null, isLoading, isError };

  let dataFiltered = data?.filter((film) => {
    return film.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  if (genre) {
    dataFiltered = dataFiltered?.filter((film) => {
      if (!isDictionaryKey(film.genre)) return false;
      return Dictionary.GENRES[film.genre] === genre;
    });
  }
  if (cinema) {
    dataFiltered = dataFiltered?.filter((film) => {
      const filmId = film.id;
      return cinemaFilmList?.includes(filmId);
    });
  }
  return { isLoading, isError, data: dataFiltered };
}
