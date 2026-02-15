import { setRoles, setUser } from "../actions/clientActions";
import axiosInstance from "../../api/axiosInstance";

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;
    if (roles.length > 0) return;
    try {
      const response = await axiosInstance.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Roles fetch failed", error);
    }
  };
};

export const loginUser = (formData, rememberMe, history, location) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", formData);
      const { token, ...user } = response.data;  
      dispatch(setUser(user)); 
      axiosInstance.defaults.headers.common["Authorization"] = token;  
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        
        localStorage.removeItem("token");
      } 
      const redirectTo = location.state?.from || "/";
      history.push(redirectTo);
      return response.data; 
    } catch (error) {
      
      throw error;
    }
  };
};