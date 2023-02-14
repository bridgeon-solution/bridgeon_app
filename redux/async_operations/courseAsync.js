import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "../apis/courseApi";

export const getAllCourse = createAsyncThunk("course/all", async () => {
  try {
    const response = await courseApi.getAllCourse();
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
