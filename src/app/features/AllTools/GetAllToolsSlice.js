import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tools: [],
};

const getToolsSlice = createSlice({
  name: "gettools",
  initialState,
  reducers: {
    fetchingTools: (state, action) => {
      state.tools = action.payload;
    },
  },
});

export const { fetchingTools } = getToolsSlice.actions;
export default getToolsSlice.reducer;
