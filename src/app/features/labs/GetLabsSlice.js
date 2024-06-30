import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 labs:[]
};

const getlabsSlice = createSlice({
  name: "getlabs",
  initialState,
  reducers: {
   fetchLabs:(state , action)=>{
     state.labs = action.payload
   }
  },
});

export const { fetchLabs } =getlabsSlice.actions;
export default getlabsSlice.reducer;
