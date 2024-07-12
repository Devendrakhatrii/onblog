import UseBlog from "@/hooks/UseBlog";
import { useContext, createContext, useState, useEffect } from "react";

const BlogContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const { data, loading, error } = UseBlog({ title, limit, page });

  return (
    <BlogContext.Provider
      value={{
        blogs: data?.data,
        loading,
        error,
        page,
        limit,
        setTitle,
        setLimit,
        setPage,
      }}
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
