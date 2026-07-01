import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/auth",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized");
    }

    return Promise.reject(error);
  },
);

export default api;
