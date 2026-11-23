import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for the shopping cart.
 * Each cart item keeps the plant details plus a quantity.
 */
const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      if (state.items[plant.id]) {
        state.items[plant.id].quantity += 1;
      } else {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
    increaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (!item) {
        return;
      }
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        delete state.items[action.payload];
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart.items);

export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;
