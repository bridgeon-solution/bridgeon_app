import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig(`${process.env.NEXT_PUBLIC_EXTERNAL_SERVER}/auth`);
export const authApi = {
  login: (data) => axios.post("/login", data),
  join: (data) => axios.post("/join", data),
  sendOtp: () => axios.post("/otp/send"),
  verifyOtp: (otp) => axios.post("/otp/verify", otp),
};
