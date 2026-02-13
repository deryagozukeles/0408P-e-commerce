import axiosInstance from "../api/axiosInstance";
import {SET_USER,SET_ROLES,SET_THEME,SET_LANGUAGE} from "../reducers/clientReducer";
export const setUser=(user)=>({type:SET_USER,payload:user});
export const setRoles=(roles)=>({type:SET_ROLES,payload:roles});
export const setTheme=(theme)=>({type:SET_THEME,payload:theme});
export const setLanguage=(lang)=>({type:SET_LANGUAGE,payload:lang});

export const loginUser=(formData,rememberMe,navigate,location)=>{
    return async (dispatch)=>{
        try{
            const response=await axiosInstance.post("/login",formData);
            const {token,user} = response.data;
            dispatch(setUser(user));
            if(rememberMe){
                localStorage.setItem("token",token);
            }
            const redirectTo=location.state?.form || "/" ;
            navigate(redirectTo);
        }catch(error){
            throw error;
        }
    }
}
