import axiosInstance from "../../api/axiosInstance";
import {SET_USER,SET_ROLES,SET_THEME,SET_LANGUAGE,SET_TOKEN,LOGOUT} from "../reducers/clientReducer";
import { useHistory } from "react-router-dom";
export const setUser=(user)=>({type:SET_USER,payload:user});
export const setRoles=(roles)=>({type:SET_ROLES,payload:roles});
export const setTheme=(theme)=>({type:SET_THEME,payload:theme});
export const setLanguage=(lang)=>({type:SET_LANGUAGE,payload:lang});


export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const loginUser = (formData, rememberMe, history, location) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", formData);
      const { token, user } = response.data;
      
      dispatch(setUser(user));
      dispatch({ type: SET_TOKEN, payload: token });

      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      
      const redirectTo = location.state?.from || "/";
      history.push(redirectTo);
      return response.data;
      
    } catch (error) {
      throw error;
    }
  };
};