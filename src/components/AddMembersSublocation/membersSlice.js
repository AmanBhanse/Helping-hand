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
    removeMember: (state, action) => {
      state.members = state.members.filter((item) => item !== action.payload);
    },
  },
});

export const { addMember, removeMember } = membersContainerSlice.actions;

export default membersContainerSlice.reducer;
