import { createSlice } from "@reduxjs/toolkit";




const authSlice = createSlice({
    name:"auth",
    initialState: {auth: false},
    reducers:{
        login: (state,action)=>{
            state.auth = true;
        },
        join: (state,action)=>{

        },
        logout:(state,action)=>{
            state.auth = false;
        }
    }
    
});

export const {join,login,logout} = authSlice.actions

export default authSlice.reducer