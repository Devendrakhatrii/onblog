import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { emptyBookmarks, removeBookmarks } from "@/slices/BookmarksSlices";
import { dateFormatter } from "@/utils/date";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Bookmarks() {
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  return (
    <div className=" h-screen flex items-start justify-around bg-red-600">
      <Card className=" md:p-5 p-0.5 mt-10 ">
        <div className=" flex items-end justify-end m-5">
          <Button
            variant={"destructive"}
            onClick={() => dispatch(emptyBookmarks())}
            className="hover:bg-red-800"
          >
            Remove All
          </Button>
        </div>
        <Table>
          <TableCaption>
            {" "}
            <Link to={"/users/blogs"} className="underline">
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
                    <TableCell>
                      <Link to={`/users/blogs/${item.slug}`}>{item.title}</Link>
                    </TableCell>
                    <TableCell>{item.author}</TableCell>
                    <TableCell className="">
                      {dateFormatter(item.createdAt, "L")}
                    </TableCell>
                    <TableCell className="flex items-center justify-center">
                      <Button
                        onClick={() => dispatch(removeBookmarks(item))}
                        variant="destructive"
                        className="p-2 hover:bg-red-800"
                      >
                        <X />
                      </Button>
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
