import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const PaginationComponent = ({ data, setLimit, setPage, page, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(Number(data?.total / limit));
  console.log(numberOfPages);

  let items = [];
  for (let n = 1; n <= numberOfPages; n++) {
    items.push(
      <PaginationItem key={n}>
        <PaginationLink
          onClick={() => {
            setPage(n);
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
      <Pagination>
        <PaginationContent className="cursor-pointer">
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  setPage(page - 1);
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
