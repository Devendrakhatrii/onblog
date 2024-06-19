import { bookmarksReducer } from "@/slices/BookmarksSlices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
  },
});

export default store;
