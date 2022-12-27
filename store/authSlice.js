import { createSlice } from "@reduxjs/toolkit";




const authSlice = createSlice({
    name:"auth",
    initialState: {auth: true},
    reducers:{
        login: ()=>{

        },
        join: ()=>{

        }
    }
    
});

export const {join,login} = authSlice.actions

export default authSlice.reducer