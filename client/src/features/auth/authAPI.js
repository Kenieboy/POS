import api from "../../api/axios";

export const registerAPI = (data) => api.post("/register", data);

export const loginAPI = (data) => api.post("/login", data);

export const logoutAPI = () => api.get("/logout");

export const profileAPI = () => api.get("/profile");
