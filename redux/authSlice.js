import { createSlice } from "@reduxjs/toolkit";




const authSlice = createSlice({
    name:"auth",
    initialState: {auth: true},
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