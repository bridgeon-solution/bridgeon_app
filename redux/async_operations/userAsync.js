import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../apis/userApi";
// calling user api to get user data
export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    return userApi.getUser().then((res) => res.data);
  } catch (err) {
    console.log("Find Error on userSlice", err);
  }
});

export const getProfile = createAsyncThunk("user/profile", async () => {
  try {
    const response = await userApi.getProfile();
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
