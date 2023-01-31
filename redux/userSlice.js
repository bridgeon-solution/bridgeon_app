import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./apis/userApi";
import { authApi } from "./apis/authApi";
import {
  getUser,
  login,
  sendOtp,
  verifyOtp,
  join,
} from "./async_operations/userAsync";
import { decode } from "../lib/jwt";

// user all in one controller
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    userData: "",
    inValid: "",
    token: "",
    onOTP: {
      onSent: "",
      verified: false,
      onVerify: "",
      onJoin: "",
      joined: false,
    },
  },
  reducers: {
    // signing out
    logout: (state, action) => {
      state.auth = false;
    },
    //sending otp
  },
  extraReducers: (builder) => {
    // get users with specific user id / username
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      console.log(action.payload);
    });
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      // 🔴 login redirection on login
      if (action.payload.error) {
        state.inValid = action.payload.error;
        state.auth = false;
      }
      if (action.payload.data) {
        state.inValid = "";
        state.token = action.payload.token;
        localStorage.setItem("token", state.token);
        state.userData = decode(state.token);
        state.auth = true;
      }
    });

    //verifying entered otp
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.onOTP.verified = action.payload.data;
      state.onOTP.onVerify = "fulfilled";
    });
    builder.addCase(verifyOtp.pending, (state, action) => {
      state.onOTP.onVerify = "pending";
    });
    //sending otp
    builder.addCase(sendOtp.pending, (state, action) => {
      state.onOTP.onSent = "pending";
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.onOTP.onSent = "fulfilled";
    });

    // joining new user
    builder.addCase(join.fulfilled, (state, action) => {
      state.onOTP.onJoin = "fulfilled";
      state.onOTP.joined = action.payload.data;
    });
    builder.addCase(join.pending, (state, action) => {
      state.onOTP.onJoin = "pending";
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
