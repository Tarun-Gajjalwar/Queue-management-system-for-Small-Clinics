import axios from "axios";

const API = axios.create({
  baseURL: "https://queue-management-system-for-small-clinics.onrender.com/api",
  withCredentials: true,   // 🔥 YE SABSE IMPORTANT HAI
});

export default API;