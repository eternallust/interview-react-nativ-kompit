import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor untuk request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor untuk response
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       console.error("Response error:", error.response.data);
//     } else if (error.request) {
//       console.error("Request error:", error.request);
//     } else {
//       console.error("Error:", error.message);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
