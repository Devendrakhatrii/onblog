import { Button } from "@/components/ui/button";
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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogs, getBlogs } from "@/slices/BlogSlice";
import { dateFormatter } from "@/utils/date";

const AdminBlogs = () => {
  const dispatch = useDispatch();
  const { blogs, blog, page, limit, total } = useSelector(
    (state) => state.blogs
  );
  useEffect(() => {
    dispatch(getBlogs({ page: page, limit: limit, title: "" }));
    dispatch(
      addBlogs({
        title: "That Time The Lego Characters Started Talking",
        author: "singdha adhikari",
        Content:
          "Before he was the star of a big budget spin-off Hollywood movie, Lego Batman was brought to life in video games. His first digital adventure came out way back in 2008, and it got a sequel in 2012. Lego Batman 2 was a big deal, not just for its graphical advancements and more open design — but also because it finally gave the characters real actual voices.",
      })
    );
  }, [dispatch, limit, page]);
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Blogs</h1>
        {JSON.stringify(blog)}
      </div>
      <div className=" flex justify-end">
        <Button className="mt-4">Add Blogs</Button>
      </div>
      <div className="flex flex-1  justify-center rounded-lg border border-dashed shadow-sm p-3 ">
        <Table className="mt-0 ">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.duration}</TableCell>
                <TableCell>{dateFormatter(blog.createdAt, "LL")}</TableCell>
                <TableCell>{blog.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>Total</TableCell>
              <TableCell className="text-right">{total}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        {/* </Card> */}
        {/* <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default AdminBlogs;
