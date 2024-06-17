import { bookmarksReducer } from "@/slices/BookmarksSlices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    bookmark: bookmarksReducer,
  },
});

export default store;
