import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig(process.env.NEXT_PUBLIC_INTERNAL_SERVER);
export const topicsApi = {
  getTopics: () => axios.get("/api/getTopics"),
  deleteUser: () => axios.delete(),
  updateUser: () => axios.put(),
};
