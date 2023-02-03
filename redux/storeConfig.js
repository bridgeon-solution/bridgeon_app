import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "./topicsSlice";
import authSlice from "./authSlice";
import userSlice from "./userSlice";

export const store = () =>
  configureStore({
    reducer: {
      userReducer: userSlice,
      topicsReducer: topicsSlice,
      authReducer: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
