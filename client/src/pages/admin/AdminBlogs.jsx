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
import { getBlogs } from "@/slices/BlogSlice";
import { dateFormatter } from "@/utils/date";
import AddBlog from "@/components/AddBlog";
import { Link } from "react-router-dom";
// import { createBlogs } from "@/services/blogs";

const AdminBlogs = () => {
  const dispatch = useDispatch();
  const { blogs, page, limit, total, error, blog } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(getBlogs({ page: page, limit: 20, title: "" }));
  }, [dispatch, limit, page]);

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Blogs</h1>
      </div>
      <div className=" flex md:justify-end">
        <AddBlog />
      </div>
      <div className="flex flex-0  justify-center rounded-lg border border-dashed shadow-sm md:p-3  p-0 m-0">
        <Table className="mt-0 ">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="md:w-[100px]">#</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Dur</TableHead>
              <TableHead className="max-w-16">At</TableHead>
              <TableHead className="max-w-20 pr-0">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-md ">
            {blogs.map((blog, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>
                  <Link to={`#`}>{blog.title}</Link>
                </TableCell>
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
      </div>
    </>
  );
};

export default AdminBlogs;
