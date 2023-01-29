import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig(`${process.env.NEXT_PUBLIC_EXTERNAL_SERVER}/auth`);
export const authApi = {
  login: (data) => axios.post("/login", data),
  join: (data) => axios.post("/join", data),
  sendOtp: (email) => axios.post("/otp/send",{email}),
  verifyOtp: (otp,email) => axios.post("/otp/verify", {otp,email}),
};
