import { configureStore } from '@reduxjs/toolkit';
import membersReducer from './components/AddMembersSublocation/membersSlice';
import itemsReducer from './components/AddItemsSublocation/itemsSlice';

export default configureStore({
  reducer: {
    membersContainer: membersReducer,
    itemsStore: itemsReducer,
  },
});
