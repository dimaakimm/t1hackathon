import axios from "axios";
// import { LocalStorageTokenKey } from "../store/slices/auth";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8090/",
    headers: {
      "Access-Control-Allow-Methods": "*",
    },
});

// axiosInstance.interceptors.request.use((config) => {
//     if(localStorage.getItem(LocalStorageTokenKey)){
//         config.headers.Authorization = `Bearer ${localStorage.getItem(LocalStorageTokenKey)}`;
//     }
//     return config;
// });