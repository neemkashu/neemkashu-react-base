import { useGetFilmsQuery } from "../../../../redux/films/filmApi";
import { useAppSelector } from "../../../../redux/hooks";
import { selectSearchText } from "../../../../redux/selectors";

export function useFilteredMovies() {
  const { data, isLoading, isError } = useGetFilmsQuery();
  const searchQuery = useAppSelector(selectSearchText);

  if (isLoading || isError) return { data: null, isLoading, isError };

  const dataFiltered = data?.filter((movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return { isLoading, isError, data: dataFiltered };
}
