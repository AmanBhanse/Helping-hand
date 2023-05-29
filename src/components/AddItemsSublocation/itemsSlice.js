import { createSlice } from '@reduxjs/toolkit';

export const itemsContainerSlice = createSlice({
  name: 'items slice',
  initialState: {
    itemsMeta: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.itemsMeta.push({
        itemName: action.payload.itemName,
        totalItemPriceOnBill: action.payload.totalItemPriceOnBill,
      });
    },
    removeItem: (state, action) => {
      state.itemsMeta = state.itemsMeta.filter(
        (meta) => meta.itemName !== action.payload
      );
    },
  },
});

export const { addItems, removeItem } = itemsContainerSlice.actions;
export default itemsContainerSlice.reducer;
