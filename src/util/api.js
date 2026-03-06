import axios from "axios";

const api = axios.create({
  baseURL: "https://shop-pos-server-production.up.railway.app",




  headers: {
    "Content-Type": 'application/json'
  }
})
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("jwt");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
export default api;