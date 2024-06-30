import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 roomAdmins:[]
};

const getroomAdminsSlice = createSlice({
  name: "getroomAdmins",
  initialState,
  reducers: {
   fetchroomAdmins:(state , action)=>{
     state.roomAdmins = action.payload
   }
  },
});

export const { fetchroomAdmins } =getroomAdminsSlice.actions;
export default getroomAdminsSlice.reducer;
