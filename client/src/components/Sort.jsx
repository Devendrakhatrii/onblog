import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import {
  sortAlphabeticalName,
  sortAlphabeticalEmail,
} from "@/slices/UserSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const sortUser = (e) => {
    if (e === "alphabeticalName") {
      dispatch(sortAlphabeticalName());
    }
    if (e === "alphabeticalEmail") {
      dispatch(sortAlphabeticalEmail());
    }
  };
  return (
    <>
      {" "}
      <Select onValueChange={sortUser}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort</SelectLabel>
            <SelectItem value="alphabeticalName">Alphabetical Name </SelectItem>
            <SelectItem value="alphabeticalEmail">
              Alphabetical Email{" "}
            </SelectItem>
            <SelectItem value="date">Date</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default Sort;
