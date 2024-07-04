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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogs, getBlogs } from "@/slices/BlogSlice";
import { dateFormatter } from "@/utils/date";
import { handler } from "tailwindcss-animate";
import toast from "react-hot-toast";
import { createBlogs } from "@/services/blogs";

const AdminBlogs = () => {
  const dispatch = useDispatch();
  const { blogs, page, limit, total, error, blog } = useSelector(
    (state) => state.blogs
  );

  const [payload, setPayload] = useState({
    title: "",
    content: "",
  });
  useEffect(() => {
    dispatch(getBlogs({ page: page, limit: limit, title: "" }));
  }, [dispatch, limit, page]);

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    try {
      dispatch(addBlogs(payload));
      // const data = await createBlogs(payload);
      // console.log(data);
      console.log(blog);
    } catch (error) {
      toast.error(error);
      console.log(error);
    } finally {
      setPayload({
        title: "",
        content: "",
      });
    }
  };

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Blogs</h1>
      </div>
      <div className=" flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4">Add Blogs</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form action="" onSubmit={(e) => handleSubmitBlog(e)}>
              <DialogHeader>
                <DialogTitle>Add Blogs</DialogTitle>
                <DialogDescription>
                  Add your blogs and make it available for others!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter the title.."
                    className="col-span-3"
                    onChange={(e) => {
                      setPayload((prev) => {
                        return {
                          ...prev,
                          title: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
                {/* <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="author" className="text-right">
                    Author
                  </Label>
                  <Input
                    id="author"
                    placeholder="Enter author name.."
                    className="col-span-3"
                    onChange={(e) => {
                      setPayload((prev) => {
                        return {
                          ...prev,
                          author: e.target.value,
                        };
                      });
                    }}
                  />
                </div> */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="content" className="text-right">
                    Content
                  </Label>
                  <Textarea
                    className="col-span-3"
                    placeholder="Add your content here."
                    onChange={(e) => {
                      setPayload((prev) => {
                        return {
                          ...prev,
                          content: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
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
