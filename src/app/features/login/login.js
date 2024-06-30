import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const loginSlice = createSlice({
  name: "mytokens",
  initialState,
  reducers: {
    getTokens: (state, action) => {
      state.userData = action.payload;
      console.log(state.userData, "after tokens");
    },
  },
});

export const { getTokens } = loginSlice.actions;
export default loginSlice.reducer;
