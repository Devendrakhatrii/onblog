import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getMyProfile,
  getOneUser,
  addUser,
} from "@/services/users";

const initialState = {
  users: [],
  user: {},
  profile: {},
  total: 0,
  currentPage: 1,
  limit: 100,
  error: "",
  loading: false,
  msg: "",
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({ limit, page, name }) => {
    const res = await getAllUsers({ page, limit, name });
    return res.data;
  }
);

export const addNewUser = createAsyncThunk("users/addNewUser", async () => {
  const res = await addUser();
  return res.data;
});

export const oneUser = createAsyncThunk("users/oneUser", async (id) => {
  const res = await getOneUser(id);
  return res.data;
});

export const getProfile = createAsyncThunk("users/getProfile", async () => {
  const res = await getMyProfile();
  return res.data;
});

const userSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.currentPage = 1;
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action?.payload?.data?.total;
        state.users = action?.payload?.data?.data;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.total = 0;
      })
      .addCase(getUsers.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
      })
      .addCase(addNewUser.pending, (state) => {
        state.loading = true;
        state.user = {};
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(oneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action?.payload?.data;
      })
      .addCase(oneUser.pending, (state) => {
        state.loading = true;
        state.user = {};
      })
      .addCase(oneUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action?.payload?.data;
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.profile = {};
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setLimit } = userSlice.actions;
export const userReducer = userSlice.reducer;
