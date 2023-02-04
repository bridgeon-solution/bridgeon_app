import { axiosConfig } from "../../lib/axios";
const axios = axiosConfig(
  `${process.env.NEXT_PUBLIC_EXTERNAL_SERVER}/api/users`
);
export const userApi = {
  getProfile: () => axios.get("/profile"),
  getUser: () => axios.get("/getUser"),
  deleteUser: () => axios.delete(),
  updateUser: () => axios.put(),
};
