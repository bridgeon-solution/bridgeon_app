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
    return authApi.verifyOtp(data.otp);
  } catch (err) {
    console.log("Ops", err);
  }
});

export const sendOtp = createAsyncThunk("auth/send", async (payload) => {
  console.log(payload, "Helo");
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

// user all in one controller
const authSlice = createSlice({
  name: "auth",
  initialState: { auth: false, userData: {}, otpState: "" },
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
    builder.addCase(sendOtp.pending, (state, action) => {
      state.otpState = "pending";
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.otpState = "fulfilled";
      const nonSerializableValue = localStorage.getItem("nonSerializableValue");
      console.log(data, nonSerializableValue);
    });
  },
});

export const { join, logout } = authSlice.actions;

export default authSlice.reducer;
