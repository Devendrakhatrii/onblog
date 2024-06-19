import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { removeBookmarks } from "@/slices/BookmarksSlices";
import { dateFormatter } from "@/utils/date";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Bookmarks() {
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  return (
    <div className="bg-red-100 h-screen flex items-start justify-around">
      <Card className=" p-5 mt-10 ">
        <Table>
          <TableCaption>
            {" "}
            <Link to={"/blogs"} className="underline">
              Add your Bookmarks.
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">#</TableHead>
              <TableHead className="w-[500px] text-center ">Title</TableHead>
              <TableHead className="w-[200px] text-center">Author</TableHead>
              <TableHead className="text-center w-[100px]">
                Added Date
              </TableHead>
              <TableHead className="text-center">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center items-center">
            {bookmarks.length > 0 ? (
              bookmarks?.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <Link to={`/blogs/${item.slug}`}>
                      <TableCell>{item.title}</TableCell>
                    </Link>
                    <TableCell>{item.author}</TableCell>
                    <TableCell className="">
                      {dateFormatter(item.createdAt, "L")}
                    </TableCell>
                    <TableCell className="flex items-center justify-center">
                      <button onClick={() => dispatch(removeBookmarks(item))}>
                        <X />
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow className="">
                <TableCell colSpan={5} rowspan={3}>
                  No Bookmarks!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default Bookmarks;
