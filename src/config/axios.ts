import axios from "axios";
import { removeItem } from "../utils/localstorage";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.status === 401) {
      removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default instance;
