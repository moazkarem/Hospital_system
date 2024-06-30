import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 lab_admins:[]
};

const getlab_adminsSlice = createSlice({
  name: "getlab_admins",
  initialState,
  reducers: {
   fetchlab_admins:(state , action)=>{
     state.lab_admins = action.payload
   }
  },
});

export const { fetchlab_admins } =getlab_adminsSlice.actions;
export default getlab_adminsSlice.reducer;
