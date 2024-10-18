import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name:'user',
   initialState:null,
   reducers:{
    addUser:(state,action) => state= action.payload,
    deleteUser:(state) =>  state= null
   }
});

export const {addUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;

 
