import axios from "axios";
import { isAuthenticated, notAuthenticated } from "../features/authSlice";
import { AppDispatch } from "../store";
import { baseURL } from "@/lib/baseUrl";

type AuthCheckResponse = {
    data: UserData;
    status: number;
}

export const AuthCheck = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(notAuthenticated());
        return; 
      }
     
      const response = await axios.get<AuthCheckResponse>(`${baseURL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
   
     
      if (response.status === 200) {
        dispatch(
          isAuthenticated({
            user: response.data,
            token: token,
          })
          
        );
      } else {
        dispatch(notAuthenticated());
      }
    } catch (error) {
      dispatch(notAuthenticated());
      console.log(error)
    }
  };
};

export default AuthCheck;
