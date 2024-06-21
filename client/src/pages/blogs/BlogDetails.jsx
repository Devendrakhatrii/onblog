import { getOneBlog } from "@/services/blogs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { id = "" } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchOneBlog = async () => {
      const { data } = await getOneBlog(id);
      console.log(data);
      setData(data);
    };
    fetchOneBlog();
  }, [id]);
  return (
    <>
      <div>BlogDetails {data?.data?.slug}</div>
    </>
  );
};

export default BlogDetails;
