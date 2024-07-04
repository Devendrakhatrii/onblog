import { blogReducer } from "@/slices/BlogSlice";
import { bookmarksReducer } from "@/slices/BookmarksSlices";
import { userReducer } from "@/slices/UserSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistBookmarkConfig = {
  key: "bookmark",
  storage,
};

const persistBookmark = persistReducer(persistBookmarkConfig, bookmarksReducer);

export const store = configureStore({
  reducer: {
    bookmarks: persistBookmark,
    users: userReducer,
    blogs: blogReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [REGISTER],
      },
    });
  },
});

export const newStore = persistStore(store);
