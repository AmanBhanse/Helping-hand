import { createSlice } from "@reduxjs/toolkit";

export const membersContainerSlice = createSlice({
  name: "membersContainer",
  initialState: {
    members: [],
  },
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
  },
});

export const { addMember } = membersContainerSlice.actions;

export default membersContainerSlice.reducer;
