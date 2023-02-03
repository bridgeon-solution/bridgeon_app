import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";


// calling login api
export const login = createAsyncThunk("auth/login", async ({ data }) => {
  try {
    console.log(data);
    const response = await authApi.login(data);

    return response.data;
  } catch (err) {
    console.log(err.response);
    return { error: err.response.data.data };
  }
});
//verifying entered otp
export const verifyOtp = createAsyncThunk("auth/verification", async (data) => {
  console.log(data);
  try {
    const response = await authApi.verifyOtp(data.otp, data.email);
    return response.data;
  } catch (err) {
    console.log("Ops", err);
  }
});
//sending otp
export const sendOtp = createAsyncThunk("auth/send", async (payload) => {
  try {
    const response = await authApi.sendOtp(payload.email);
    console.log(response);
    const data = response.data;
    localStorage.setItem(
      "nonSerializableValue",
      response.headers.nonSerializableValue
    );
    return { data };
  } catch (err) {
    console.log(err);
  }
});

//user joining
export const join = createAsyncThunk("auth/join", async (payload) => {
  try {
    console.log(payload);
    const response = await authApi.join(payload);
    console.log(response);
    const data = response.data;

    return { data };
  } catch (err) {
    console.log(err);
  }
});




