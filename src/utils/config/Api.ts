import axios from "axios";

export const API_BASE_URL = "https://clearancefuto.pythonanywhere.com";

export const Api = axios.create({
  baseURL: API_BASE_URL
});

export const setAxiosToken = (token: string) => {
  Api.interceptors.request.use(
    (request) => {
      request.headers.Authorization = `token ${token}`;
      request.headers["Content-Type"] = "application/json";
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

Api.interceptors.response.use(
  async (response) => response,
  (error) => Promise.reject(error.response.data)
);
