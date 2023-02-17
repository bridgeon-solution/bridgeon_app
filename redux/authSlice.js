import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  login,
  sendOtp,
  verifyOtp,
  join,
} from "./async_operations/authAsync";
import { decode } from "../lib/jwt";
import Cookie from "universal-cookie";
import { authApi } from "./apis/authApi";
const cookie = new Cookie();
// user all in one controller
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: "",
    inValid: "",

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
      localStorage.removeItem("log");
      authApi.logout()
      window.location.reload();
      window.location.pathname = "/";
    },
    confirmLog: (state, action) => {
      state.auth = localStorage.getItem("log") == "true";
    },

    //sending otp
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.inValid = action.payload.error;
      }
      if (action.payload.data) {
        console.log(Boolean(cookie.get("log")), "😂");
        state.inValid = "";
        localStorage.setItem("log", Boolean(cookie.get("log") == "true"));
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

export const { logout, confirmLog } = authSlice.actions;

export default authSlice.reducer;
