import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  roomTools: [],
};

const getRoomTools = createSlice({
  name: "getroomtools",
  initialState,
  reducers: {
    fetchRoomTools: (state, action) => {
      state.roomTools = action.payload;

    },
    getRoomToolId: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

export const { fetchRoomTools, getRoomToolId } = getRoomTools.actions;
export default getRoomTools.reducer;
