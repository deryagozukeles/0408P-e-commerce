
import { setRoles, setUser } from "../actions/clientActions";


export const fetchRolesIfNeeded= ()=>{
    return async (dispatch,getState)=>{
        const {roles}=getState().client;
        if(roles.length>0) return;
        try{
            const response= await axiosInstance.get('/roles');
            dispatch(setRoles(response.data));     
        } catch (error){
            console.error("Roles fetch failed", error);
        }
    }
}

export const loginUser = (formData, rememberMe, history, location) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", formData);

      const { token, user } = response.data;

      // Redux'a user kaydet
      dispatch(setUser(user));

      // Remember me
      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      // Redirect
      const redirectTo = location.state?.from || "/";
      history.push(redirectTo);

    } catch (error) {
      throw error;
    }
  };
};