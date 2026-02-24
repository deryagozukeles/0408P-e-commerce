import axios from "axios";
import store from "../store/store";


{/*const axiosInstance=axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});
axiosInstance.interceptors.request.use((config) => {
  const token =
    store.getState().client.token || localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
export default axiosInstance;*/}

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});


axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem("token"); 
    
    if (token) {
      
      config.headers.Authorization = token;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;