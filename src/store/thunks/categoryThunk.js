import axiosInstance from "../../api/axiosInstance";
import { setCategories, setCategoryError, setCategoryLoading } from "../actions/categoryActions";

export const fetchCategories=()=>async(dispatch)=>{
    try{
        dispatch(setCategoryLoading(true));
       const response = await axiosInstance.get("/categories");
        dispatch(setCategories(response.data));
    } catch(error){
        dispatch(setCategoryError(error.message));
    } finally{
        dispatch(setCategoryLoading(false));
    }
};