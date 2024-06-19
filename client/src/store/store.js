import { bookmarksReducer } from "@/slices/BookmarksSlices";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistBookmarkConfig = {
  key: "bookmark",
  storage,
};

const persistBookmark = persistReducer(persistBookmarkConfig, bookmarksReducer);

export const store = configureStore({
  reducer: {
    bookmarks: persistBookmark,
  },
});

export const newStore = persistStore(store);
