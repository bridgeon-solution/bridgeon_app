import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "./apis/userApi";

export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    return userApi.getUser().then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { auth: true, userData: {} },
  reducers: {
    login: (state, action) => {
      state.auth = true;
    },
    join: (state, action) => {},
    logout: (state, action) => {
      state.auth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      console.log(action.payload);
    });
  },
});

export const { join, login, logout } = authSlice.actions;

export default authSlice.reducer;
