import instance from "../utils/axios";
import { APIs } from "../constants";

export const publishedBlogs = ({ title = "", limit = 10, page = 1 }) => {
  return instance.get(
    APIs.BLOGS + `/published-only?title=${title}&limit=${limit}&page=${page}`
  );
};

export const getOneBlog = (slug) => {
  return instance.get(APIs.BLOGS + `/${slug}`);
};
  