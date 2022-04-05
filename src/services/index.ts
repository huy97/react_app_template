import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "",
  timeout: 30000,
  timeoutErrorMessage: "Request Timeout",
});

const isProd = process.env.NODE_ENV !== "development";

service.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    if (!isProd) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    if (!isProd) {
      console.log("SUC Resp: ", response.data);
    }

    return response;
  },
  function (error) {
    if (error.response) {
      if (!isProd) {
        console.log("ERR Resp: ", error.response);
      }
      return Promise.reject(error.response);
    }

    if (!isProd) {
      console.log("Err: ", error);
    }

    return Promise.reject(error);
  }
);

export default service;
