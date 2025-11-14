import axios from "axios";

import { getEnvironments } from "@/helpers/getEnvironments";

const { VITE_API_BACKEND } = getEnvironments();

const appApi = axios.create({
  baseURL: VITE_API_BACKEND,
});

appApi.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token-adm");

    if (token) {
      config.headers["adm-token"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default appApi;
