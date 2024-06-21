import { Card, CardHeader } from "@/components/ui/card";
import { getOneBlog } from "@/services/blogs";
import { dateFormatter } from "@/utils/date";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardContent } from "@/components/ui/card";
import _, { result } from "lodash";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useBlogContext } from "@/context/BlogContext";
const BlogDetails = () => {
  const { id = "" } = useParams();
  const [blog, setBlog] = useState({});
  const { blogs } = useBlogContext();
  const [randomBlogs, setRandomBlogs] = useState([]);

  const getRamdom = useCallback(() => {
    const ran = blogs?.data;
    const result = _.sampleSize(ran, 5);
    setRandomBlogs(result);
  }, [blogs]);

  useEffect(() => {
    const fetchOneBlog = async () => {
      const { data } = await getOneBlog(id);
      setBlog(data?.data);
    };
    fetchOneBlog();
    getRamdom();
  }, [id, getRamdom]);

  return (
    <>
      <Card
        className="m-10 flex flex-col
      gap-10 p-5 rounded-sm"
      >
        <div className="flex gap-5">
          <img
            src={`${blog?.pictureUrl}`}
            className="h-1/2 w-1/2 rounded-md"
            alt=""
          />
          <Card className="p-5 rounded-sm">
            <h1 className="text-2xl font-bold">{blog?.title}</h1>
            <p className="mt-5 text-lg">{blog?.content}</p>
            <p className="mt-5 text-lg font-light">
              {" "}
              Author : {blog?.author?.name}
            </p>
            <p className=" text-lg font-light">
              {" "}
              Published : {dateFormatter(blog?.createdAt)}
            </p>
            <p className=" text-lg font-light">
              {" "}
              Last updated : {dateFormatter(blog?.createdAt, "LL")}
            </p>
          </Card>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold">More Blogs</h1>

          <Carousel className="w-1/3 h-1/2 ">
            <CarouselContent>
              {randomBlogs?.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className=" w-full h-full">
                      <CardHeader className="flex items-center justify-center ">
                        <img
                          src={`${item.pictureUrl}`}
                          alt=""
                          className="h-100 w-1/2 rounded-md"
                        />
                      </CardHeader>
                      <Link to={`/blogs/${item.slug}`}>
                        <CardContent className="  text-left">
                          <h1 className="text-xl font-medium">{item.title}</h1>
                          <p className="mt-2">
                            {item.content.slice(0, 200).concat("...")}
                          </p>
                          <p className="font-light">
                            {dateFormatter(item.createdAt, "LL")}
                          </p>
                        </CardContent>
                      </Link>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Card>
    </>
  );
};

export default BlogDetails;
