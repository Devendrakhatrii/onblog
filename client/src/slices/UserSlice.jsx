import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getMyProfile,
  getOneUser,
  addUser,
  blockUser,
} from "@/services/users";
import toast from "react-hot-toast";

const initialState = {
  users: [],
  user: {},
  profile: {},
  total: 0,
  currentPage: 1,
  limit: 100,
  error: false,
  loading: false,
  msg: "",
  success: false,
  search: "",
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({ limit, page, name }) => {
    const res = await getAllUsers({ page, limit, name });
    return res.data;
  }
);
export const sortAlphabeticalName = createAsyncThunk(
  "users/sortAlphabeticalName",
  async ({ limit, page, name }) => {
    const res = await getAllUsers({ limit, page, name });
    return res.data;
  }
);
export const sortAlphabeticalEmail = createAsyncThunk(
  "users/sortAlphabeticalEmail",
  async ({ limit, page, name }) => {
    const res = await getAllUsers({ limit, page, name });
    return res.data;
  }
);

export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async (payload) => {
    const res = await addUser(payload);
    return res.data;
  }
);

export const oneUser = createAsyncThunk("users/oneUser", async (id) => {
  const res = await getOneUser(id);
  return res.data;
});

export const getProfile = createAsyncThunk("users/getProfile", async () => {
  const res = await getMyProfile();
  return res.data;
});
export const userBlock = createAsyncThunk("users/userBlock", async (email) => {
  const res = await blockUser(email);
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
    search: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action?.payload?.data?.total;
        state.users = action?.payload?.data?.data;
        state.msg = action?.payload?.data;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.total = 0;
        state.msg = "";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action?.payload?.data;
      })
      .addCase(sortAlphabeticalName.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action?.payload?.data?.total;
        const data = action?.payload?.data?.data;
        const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
        state.users = sorted;
        state.msg = action?.payload?.data;
      })
      .addCase(sortAlphabeticalName.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.total = 0;
        state.msg = "";
      })
      .addCase(sortAlphabeticalName.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action?.payload?.data;
      })
      .addCase(sortAlphabeticalEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action?.payload?.data?.total;
        const data = action?.payload?.data?.data;
        const sorted = [...data].sort((a, b) => a.email.localeCompare(b.email));
        state.users = sorted;
        state.msg = action?.payload?.data;
      })
      .addCase(sortAlphabeticalEmail.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.total = 0;
        state.msg = "";
      })
      .addCase(sortAlphabeticalEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action?.payload?.data;
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
        state.success = true;
        toast.success("User created succesfully");
      })
      .addCase(addNewUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.user = {};
        state.success = false;
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.error.message;
        toast.error(action.error.message);
      })
      .addCase(oneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action?.payload?.data;
      })
      .addCase(oneUser.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = false;
      })
      .addCase(oneUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action?.payload?.data;
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.profile = {};
        state.error = false;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(userBlock.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = action?.payload?.data;
        state.success = true;
        toast.success(action?.payload?.data);
      })
      .addCase(userBlock.pending, (state) => {
        state.loading = true;
        state.msg = "";
        state.success = false;
        state.error = false;
      })
      .addCase(userBlock.rejected, (state, action) => {
        state.loading = false;
        state.msg = action.error.message;
        state.error = true;
        toast.error(action.error.message);
      });
  },
});

export const { setCurrentPage, setLimit, search } = userSlice.actions;
export const userReducer = userSlice.reducer;
