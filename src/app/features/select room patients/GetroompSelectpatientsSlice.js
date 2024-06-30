import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 selectRoomId:[] ,
 selctedPatients:[]
};

const getSelectedPatients = createSlice({
  name: "getselcetedpatients",
  initialState,
  reducers: {
   fetchSelectPatients:(state , action)=>{
     state.selctedPatients = action.payload
   } ,
   fetchSelectRoomid:(state , action)=>{
    state.selectRoomId = action.payload
  }
  },
});

export const { fetchSelectPatients , fetchSelectRoomid } =getSelectedPatients.actions;
export default getSelectedPatients.reducer;
