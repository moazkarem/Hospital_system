import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 patients:[]
};

const getPatientsSlice = createSlice({
  name: "getpatients",
  initialState,
  reducers: {
   fetchPatients:(state , action)=>{
     state.patients = action.payload
   }
  },
});

export const { fetchPatients } =getPatientsSlice.actions;
export default getPatientsSlice.reducer;
