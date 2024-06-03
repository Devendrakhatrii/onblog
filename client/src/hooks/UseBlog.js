import { publishedBlogs } from "@/services/blogs";
import { useEffect, useState } from "react";

const UseBlog = ({ title, limit, page }) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await publishedBlogs({ title, limit, page });
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
          setError("");
        }, 3000);
      }
    };
    getBlogs();
  }, [title, limit, page]);

  return { data, error, loading };
};

export default UseBlog;
