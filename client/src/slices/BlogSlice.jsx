import { publishedBlogs, createBlogs } from "@/services/blogs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  blogs: [],
  blog: {},
  error: false,
  loading: false,
  limit: 10,
  page: 1,
  title: "",
  total: 0,
  msg: "",
  success: false,
};

export const getBlogs = createAsyncThunk(
  "blogs/getBlogs",
  async ({ page, limit, title }) => {
    const res = await publishedBlogs({ title, limit, page });
    return res.data;
  }
);
export const addBlogs = createAsyncThunk("blogs/addBlogs", async (payload) => {
  const res = await createBlogs(payload);
  return res.data;
});
export const blogSlice = createSlice({
  initialState,
  name: "blogs",
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setPage: (state, action) => {
      state.Page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action?.payload?.data?.total;
        state.total = action?.payload?.data?.page;
        state.total = action?.payload?.data?.limit;
        state.blogs = action?.payload?.data?.data;
      })
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
        state.blogs = [];
        state.total = 0;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action?.payload?.data;
        state.success = true;
        toast.success("Blog created succesfully!");
      })
      .addCase(addBlogs.pending, (state) => {
        state.loading = true;
        state.blog = {};
      })
      .addCase(addBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.error.message;
        toast.error(action.error.message);
      });
  },
});

export const { setLimit, setPage } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
