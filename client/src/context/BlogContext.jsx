import UseBlog from "@/hooks/UseBlog";
import { useContext, createContext, useState } from "react";

const BlogContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  const { data, loading, error } = UseBlog({ title });
  console.log(data);

  return (
    <BlogContext.Provider
      value={{ blogs: data?.data, loading, error, setTitle }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("Blog context must be wrapped inside provider");
  return context;
};
