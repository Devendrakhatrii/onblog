import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Bookmark, CircleMinus, Ellipsis } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useBlogContext } from "@/context/BlogContext";
import { dateFormatter } from "@/utils/date";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookmarks } from "@/slices/BookmarksSlices";
import PaginationComponent from "@/components/Pagination";

const Blogs = () => {
  const { blogs, loading, error, limit, page, setLimit, setPage } =
    useBlogContext();
  const dispatch = useDispatch();

  return (
    <>
      <div className=" min-h-screen p-3 flex flex-wrap items-center justify-center sm:bg-red-700">
        {blogs &&
          blogs.data.map((item, index) => {
            return (
              <Card className="w-1/2 mb-4 m-2 sm:w-full" key={index}>
                <CardHeader>
                  <CardTitle className="flex  items-center gap-2">
                    <Avatar className="">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        className="z=0"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{item.author}</span>
                    <span className="">:</span>
                    <span className="text-muted-foreground">
                      {dateFormatter(item.createdAt, "MMMM Do YYYY")}
                    </span>
                  </CardTitle>
                  <Link to={`/blogs/${item?.slug}`}>
                    <CardDescription className="font-bold text-lg text-foreground mt-2">
                      {item.title}
                    </CardDescription>
                  </Link>
                </CardHeader>
                <Link to={`/blogs/${item?.slug}`}>
                  <CardContent className="flex gap-2">
                    <p className="">
                      {item.content.slice(0, 500).concat("...")}
                    </p>
                    <img
                      className="h-50 w-1/3 rounded-md"
                      src={item.pictureUrl}
                    />
                  </CardContent>
                </Link>
                <CardFooter className="flex items-center  justify-between">
                  <div className="flex items-center gap-2 ">
                    <Badge
                      variant="outline"
                      className="rounded-full py-1 px-2  cursor-pointer bg-slate-100"
                    >
                      Food
                    </Badge>
                    <p className="font-light text-sm">
                      {item.duration} min read .
                    </p>
                    <p className="font-light text-sm">Selected for you</p>
                  </div>
                  <div className="flex items-center px-4  gap-3 w-1/2  text-muted-foreground cursor-pointer">
                    <Bookmark
                      className="hover:text-foreground h-5"
                      onClick={() => dispatch(addBookmarks(item))}
                    />
                    <CircleMinus className="hover:text-foreground h-5" />
                    <Ellipsis className="hover:text-foreground h-5" />
                  </div>
                </CardFooter>
              </Card>
            );
          })}
      </div>
      <div>
        <PaginationComponent
          data={blogs}
          limit={limit}
          page={page}
          setLimit={setLimit}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Blogs;
