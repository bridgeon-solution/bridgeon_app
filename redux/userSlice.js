import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfile, getUser } from "./async_operations/userAsync";

// get users with specific user id / username

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      console.log(action.payload.user,"🤵");
      state.user = action.payload.user;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      // 🔴 get user by using token impl
    });
  },
});

export default userSlice.reducer;
