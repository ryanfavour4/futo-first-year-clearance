import axios from "axios";

const API_BASE_URL = "https://clearancefuto.pythonanywhere.com";

export const Api = axios.create({
  baseURL: API_BASE_URL
});

export const setAxiosToken = (token: string) => {
  Api.interceptors.request.use(
    (request) => {
      request.headers.Authorization = `token ${token}`;
      return request;
    },
    (error) => {
      return Promise.reject(error); // Make sure to return the rejected promise
    }
  );
};

Api.interceptors.response.use(
  async (response) => response,
  (error) => Promise.reject(error.response.data)
);
