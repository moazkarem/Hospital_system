import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 labmanager:[]
};

const getlabmanagerSlice = createSlice({
  name: "getlabmanager",
  initialState,
  reducers: {
   fetchLabmanager:(state , action)=>{
     state.labmanager = action.payload
   }
  },
});

export const { fetchLabmanager } =getlabmanagerSlice.actions;
export default getlabmanagerSlice.reducer;
