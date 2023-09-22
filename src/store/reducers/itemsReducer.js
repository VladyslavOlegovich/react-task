import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [
    {
      id: 56783434,
      name: "Test",
      comments: [],
    },
  ],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const generateRandomId = () => {
        const randomId = Math.floor(10000000 + Math.random() * 90000000);
        return randomId.toString();
      };
      const newItem = {
        id: generateRandomId(),
        name: action.payload.item,
        comments: [],
      };
      state.itemsList = [...state.itemsList, newItem];
    },
    selectItem: (state, action) => {
      state.selectedItemId = action.payload;
    },
    removeItem: (state, action) => {
      state.itemsList = state.itemsList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItem, removeItem, selectItem } = itemsSlice.actions;
export default itemsSlice.reducer;
