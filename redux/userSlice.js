import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "./apis/userApi";
import { authApi } from "./apis/authApi";
// calling user api to get user data
export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    return userApi.getUser().then((res) => res.data);
  } catch (err) {
    console.log("Find Error on userSlice", err);
  }
});
// calling login api
export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    return authApi.login(data);
  } catch (err) {
    console.log("Ops", err);
  }
});
//verifying entered otp
export const verifyOtp = createAsyncThunk("auth/verification", async (data) => {
  console.log(data);
  try {
    return authApi.verifyOtp(action.payload);
  } catch (err) {
    console.log("Ops", err);
  }
});
// user all in one controller
const authSlice = createSlice({
  name: "auth",
  initialState: { auth: false, userData: {} },
  reducers: {
    // joining new user
    join: (state, action) => {
      authApi.join(action.payload);
    },

    // signing out
    logout: (state, action) => {
      state.auth = false;
    },
    //sending otp
    sendOtp: () => {
      authApi.sendOtp();
    },
  },
  extraReducers: (builder) => {
    // get users with specific user id / username
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      console.log(action.payload);
    });
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
    });

    //verifying entered otp
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { join, logout, sendOtp } = authSlice.actions;

export default authSlice.reducer;
