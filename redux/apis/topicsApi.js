import axios from "../../lib/axios";

export const topicsApi = {
  getTopics: () => axios.get("/api/getTopics"),
  deleteUser: () => axios.delete(),
  updateUser: () => axios.put(),
};
