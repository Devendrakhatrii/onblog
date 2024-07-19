import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { setUserCurrentPage } from "@/slices/UserSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const PaginationComponent = ({ data, setLimit, setPage, page, limit }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(Number(data?.total / limit));

  let items = [];
  for (let n = 1; n <= numberOfPages; n++) {
    items.push(
      <PaginationItem key={n}>
        <PaginationLink
          onClick={() => {
            setPage(n);
            dispatch(setUserCurrentPage(n));
            setCurrentPage(n);
          }}
          className={`${n === currentPage ? "bg-zinc-200" : null}`}
        >
          {n}
        </PaginationLink>
      </PaginationItem>
    );
  }
  return (
    <>
      <Pagination className={"h-20 w-full"}>
        <PaginationContent className="cursor-pointer">
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  setPage(page - 1);
                  dispatch(setUserCurrentPage(page - 1));
                  setCurrentPage(page - 1);
                }}
              />
            </PaginationItem>
          )}

          {items.map((item) => item)}

          {page !== numberOfPages && (
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  setPage(page + 1);
                  dispatch(setUserCurrentPage(page + 1));
                  setCurrentPage(page + 1);
                }}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationComponent;
