import { Dictionary } from "../../../../dictionary/dictionary";
import { useGetFilmsQuery } from "../../../../redux/films/filmApi";
import { useAppSelector } from "../../../../redux/hooks";
import { selectSearchText } from "../../../../redux/selectors";

const isDictionaryKey = (
  genre: string
): genre is keyof typeof Dictionary.GENRES => {
  return genre in Dictionary.GENRES;
};

export function useFilteredFilms() {
  const { data, isLoading, isError } = useGetFilmsQuery();
  const searchQuery = useAppSelector(selectSearchText);
  const genre = useAppSelector((store) => store.filter.genre);
  const cinema = useAppSelector((store) => store.filter.cinema);

  if (isLoading || isError) return { data: null, isLoading, isError };

  let dataFiltered = data?.filter((film) => {
    return film.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  if (genre)
    dataFiltered = dataFiltered?.filter((film) => {
      if (!isDictionaryKey(film.genre)) return false;
      return Dictionary.GENRES[film.genre] === genre;
    });
  return { isLoading, isError, data: dataFiltered };
}
