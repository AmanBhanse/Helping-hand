import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./components/AddMembersSublocation/membersSlice";

export default configureStore({
  reducer: {
    membersContainer: membersReducer,
  },
});
