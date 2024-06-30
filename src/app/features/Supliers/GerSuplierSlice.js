import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 suplier:[]
};

const getSuplierSlice = createSlice({
  name: "getsupliers",
  initialState,
  reducers: {
   fetchSupliers:(state , action)=>{
     state.suplier = action.payload
   }
  },
});

export const { fetchSupliers } =getSuplierSlice.actions;
export default getSuplierSlice.reducer;
