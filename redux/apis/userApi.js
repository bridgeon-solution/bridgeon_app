import {axiosConfig} from "../../lib/axios";
const axios = axiosConfig(process.env.NEXT_PUBLIC_INTERNAL_SERVER);
export const userApi = {
  getUser: () => axios.get("/api/getUser"),
  deleteUser: () => axios.delete(),
  updateUser: () => axios.put(),
};
