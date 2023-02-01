import { createSlice } from "@reduxjs/toolkit";
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
      localStorage.removeItem("token");
    },
    confirmLog: (state, action) => {
      state.auth = action.payload;
    },
    //sending otp
  },
  extraReducers: (builder) => {
    // get users with specific user id / username
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      const token = localStorage.getItem("token");
      state.userData = token && decode(token);
      console.log(action.payload);

      // 🔴 get user by using token impl
    });
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.inValid = action.payload.error;
      }
      if (action.payload.token) {
        state.inValid = "";
        state.token = action.payload.token;

        localStorage.setItem("token", state.token);
        state.userData = decode(state.token);
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

export const { logout, confirmLog } = authSlice.actions;

export default authSlice.reducer;
