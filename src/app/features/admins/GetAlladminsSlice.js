import { createSlice } from "@reduxjs/toolkit";

const initialState = {

 alladmin:[]
};

const getalladminSlice = createSlice({
  name: "getalladmin",
  initialState,
  reducers: {
   fetchalladmin:(state , action)=>{
     state.alladmin = action.payload
   }
  },
});

export const { fetchalladmin } =getalladminSlice.actions;
export default getalladminSlice.reducer;
