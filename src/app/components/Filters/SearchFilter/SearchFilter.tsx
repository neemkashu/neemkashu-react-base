import { FC } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateSearchText } from "../../../../redux/search/searchSlice";
import { TypeFilter } from "../UI/TypeFilter/TypeFilter";

const SearchConfig = { name: "Название" };

export const SearchFilter: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <TypeFilter
      name={SearchConfig.name}
      handler={(text) => dispatch(updateSearchText(text))}
    />
  );
};
