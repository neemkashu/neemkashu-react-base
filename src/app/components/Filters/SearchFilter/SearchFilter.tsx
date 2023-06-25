import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { updateSearchText } from "../../../../redux/search/searchSlice";
import { TypeFilter } from "../UI/TypeFilter/TypeFilter";
import { selectSearchText } from "../../../../redux/selectors";

const SearchConfig = { name: "Название" };

export const SearchFilter: FC = () => {
  const searchQuery = useAppSelector(selectSearchText);
  const dispatch = useAppDispatch();
  console.log("searchQuery", searchQuery);

  return (
    <TypeFilter
      name={SearchConfig.name}
      handler={(text) => dispatch(updateSearchText(text))}
    />
  );
};
