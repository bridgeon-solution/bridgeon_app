import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "./topicsSlice";
import userSlice from "./userSlice";

export const store = () =>
  configureStore({
    reducer: { userReducer: userSlice, topicsReducer: topicsSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
