import axios from "axios";

export const axiosConfig = (baseURL) => {
  return axios.create({ baseURL: baseURL });
};
