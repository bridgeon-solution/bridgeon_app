import { createSlice } from "@reduxjs/toolkit";
import { getAllCourse } from "./async_operations/courseAsync";

const courseSlice = createSlice({
  name: "course",
  initialState: { courses: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourse.fulfilled, (state, action) => {
        
    });
  },
});
