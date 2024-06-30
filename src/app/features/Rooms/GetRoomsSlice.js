import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 rooms:[]
};

const getroomsSlice = createSlice({
  name: "getrooms",
  initialState,
  reducers: {
   fetchRooms:(state , action)=>{
     state.rooms = action.payload
   }
  },
});

export const { fetchRooms } =getroomsSlice.actions;
export default getroomsSlice.reducer;
