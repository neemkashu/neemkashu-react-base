import { useGetFilmsQuery } from "../../../../redux/films/filmApi";
import { useAppSelector } from "../../../../redux/hooks";
import { selectSearchText } from "../../../../redux/selectors";

export function useFilteredFilms() {
  const { data, isLoading, isError } = useGetFilmsQuery();
  const searchQuery = useAppSelector(selectSearchText);

  if (isLoading || isError) return { data: null, isLoading, isError };

  const dataFiltered = data?.filter((film) => {
    return film.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return { isLoading, isError, data: dataFiltered };
}
