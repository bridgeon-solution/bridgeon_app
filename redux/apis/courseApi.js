import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig(process.env.NEXT_PUBLIC_EXTERNAL_SERVER);

export const courseApi = {
  getCourse: (id) => axios.get(`/course/${id}`),
  getAllCourse: () => axios.get("/course/all"),
};
