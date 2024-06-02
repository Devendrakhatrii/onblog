import UseBlog from "@/hooks/UseBlog";
import { useContext, createContext, useState } from "react";

const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const { data: Blogs, loading, error, message } = UseBlog({});

  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("Blog context must be wrapped inside provider");
  return context;
};
