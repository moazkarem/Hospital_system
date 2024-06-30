import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 colData :[
  {
    id: 1,
    name: "Moaz Karem",
    phone: "(751)153-5454",
    email: "Zead@jmail.com",
    Role: "doctor",
    edit: "Edit",
    delete: "Delete",
  },
 ] ,
 doctors:[]
};

const getdoctorSlice = createSlice({
  name: "getdoctor",
  initialState,
  reducers: {
   fetchDoctors:(state , action)=>{
     state.doctors = action.payload
   }
  },
});

export const { fetchDoctors } =getdoctorSlice.actions;
export default getdoctorSlice.reducer;
