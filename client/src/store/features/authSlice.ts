import { createSlice } from "@reduxjs/toolkit";


type AuthState = {
    isAuthenticated: boolean | null;
    user: UserData| null;
    token: string | null;
    };
const initialAuthState:AuthState = {
    isAuthenticated: null,
    user: null,
    token: null,
    };


const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
      
        isAuthenticated(state, action) {
          
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
  
        notAuthenticated(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
});



export const {isAuthenticated, notAuthenticated} = authSlice.actions;
export default authSlice.reducer;
