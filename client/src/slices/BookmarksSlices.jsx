import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  bookmarks: [],
  quantity: 0,
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmarks: (state, action) => {
      const ifExist = state.bookmarks.find(
        (item) => item.slug === action.payload.slug
      );
      if (!ifExist) {
        state.bookmarks.push({ ...action.payload });
        state.quantity++;
        toast.success("Bookmarked!");
      }
    },
    removeBookmarks: (state, action) => {
      const removedItem = state.bookmarks.filter(
        (item) => item.slug !== action.payload.slug
      );
      state.bookmarks = removedItem;
      state.quantity = removedItem.length;
      toast.error("Removed Bookmark!");
    },
    emptyBookmarks: (state) => {
      if (state.bookmarks.length > 0) {
        toast.error("clearing bookmark history!");
      }
      (state.bookmarks = []), (state.quantity = 0);
    },
  },
});

export const { addBookmarks, removeBookmarks, emptyBookmarks } =
  bookmarkSlice.actions;

export const bookmarksReducer = bookmarkSlice.reducer;
