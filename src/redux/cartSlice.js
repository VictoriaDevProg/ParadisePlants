import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push({ ...action.payload, selectedQuantity: 1 });
        state.totalQuantity += 1;
      }
      state.totalAmount += action.payload.price;
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.selectedQuantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.selectedQuantity > 1) {
        item.selectedQuantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.totalQuantity -= item.selectedQuantity;
        state.totalAmount -= item.price * item.selectedQuantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
