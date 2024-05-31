import { publishedBlogs } from "@/services/blogs";
import { useState } from "react";

const UseBlog = ({ title, limit, page }) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const result = await publishedBlogs({ title, limit, page });
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setError("");
        setMessage("");
      }, 3000);
    }
  };
  getBlogs();

  return { data, error, message, loading };
};

export default UseBlog;
