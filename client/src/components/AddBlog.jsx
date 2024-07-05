import { useState } from "react";
import {
  Dialog,
  DialogClose,
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
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addBlogs } from "@/slices/BlogSlice";
import toast from "react-hot-toast";

const AddBlog = () => {
  const dispatch = useDispatch();

  const { error, blog, success, msg } = useSelector((state) => state.blogs);

  const [payload, setPayload] = useState({
    title: "",
    content: "",
  });

  const handleSubmitBlog = (e) => {
    e.preventDefault();
    dispatch(addBlogs(payload));
    setPayload({
      title: "",
      content: "",
    });
  };

  const handleSubmit = () => {
    if (payload.title !== "" && payload.content !== "") return true;

    return false;
  };

  return (
    <>
      {success && toast.success("Blog created successfully.")}
      {error && toast.error(msg)}
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
              <DialogClose>
                <Button variant="outline" type="button">
                  close
                </Button>
              </DialogClose>
              <Button type="submit" disabled={!handleSubmit()}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBlog;
