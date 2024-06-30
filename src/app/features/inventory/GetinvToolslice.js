import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 invtool:[]
};

const getintoolSlice = createSlice({
  name: "getinvtools",
  initialState,
  reducers: {
   fetchinvtool:(state , action)=>{
     state.invtool = action.payload
   }
  },
});

export const { fetchinvtool } =getintoolSlice.actions;
export default getintoolSlice.reducer;
