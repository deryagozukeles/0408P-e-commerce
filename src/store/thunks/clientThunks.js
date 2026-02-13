import axios from "axios";
import { setRoles } from "../actions/clientActions";

export const fetchRolesIfNeeded= ()=>{
    return async (dispatch,getState)=>{
        const {roles}=getState().client;
        if(roles.length>0) return;
        try{
            const response= await axios.get('/axiosInstance/roles');
            dispatch(setRoles(response.data));     
        } catch (error){
            console.error("Roles fetch failed", error);
        }
    }
}