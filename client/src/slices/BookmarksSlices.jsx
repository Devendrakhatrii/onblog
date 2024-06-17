import { createSlice } from "@reduxjs/toolkit";

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
      }
    },
    removeBookmarks: (state, action) => {
      const removedItem = state.bookmarks.filter(
        (item) => item.slug !== action.payload.slug
      );
      state.bookmarks = removedItem;
      state.quantity = removedItem.length;
    },
    emptyBookmarks: (state) => {
      (state.bookmarks = {}), (state.quantity = 0);
    },
  },
});

export const { addBookmarks, removeBookmarks, emptyBookmarks } =
  bookmarkSlice.actions;

export const bookmarksReducer = bookmarkSlice.reducer;
