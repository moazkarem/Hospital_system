import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 nursing:[]
};

const getnursingSlice = createSlice({
  name: "getnursing",
  initialState,
  reducers: {
   fetchNursing:(state , action)=>{
     state.nursing = action.payload
   }
  },
});

export const { fetchNursing } =getnursingSlice.actions;
export default getnursingSlice.reducer;
