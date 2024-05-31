import instance from "../utils/axios";
import { APIs } from "../constants";

export const publishedBlogs = ({ title = "", limit = 1, page = 1 }) => {
  return instance.post(
    APIs.BLOGS + `/published-only?title=${title}&limit=${limit}&page=${page}`
  );
};
