import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LabId: null,
  LabTools: [],
};

const getLabTools = createSlice({
  name: "getLabtools",
  initialState,
  reducers: {
    fetchLabTools: (state, action) => {
      state.LabTools = action.payload;

    },
    getLabToolId: (state, action) => {
      state.LabId = action.payload;
    },
  },
});

export const { fetchLabTools, getLabToolId } = getLabTools.actions;
export default getLabTools.reducer;
