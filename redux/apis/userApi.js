import axios from "../../lib/axios";

export const userApi = {
  getUser: () => axios.get("/api/getUser"),
  deleteUser: () => axios.delete(),
  updateUser: () => axios.put(),
};
