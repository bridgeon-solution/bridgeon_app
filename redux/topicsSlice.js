import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { topicsApi } from "./apis/topicsApi";
import { userApi } from "./apis/userApi";

export const getTopics = createAsyncThunk("topic/getTopics", async () => {
  try {
    return topicsApi.getTopics().then((res) => res.data);
  } catch (err) {
    console.log("Find Error on topicsSlice", err);
  }
});

const topicsSlice = createSlice({
  name: "topic",
  initialState: { topics: {} },
  extraReducers: (builder) => {
    builder.addCase(getTopics.fulfilled, (state, action) => {
      state.topics = action.payload.data;
    });
  },
});

export default topicsSlice.reducer;
