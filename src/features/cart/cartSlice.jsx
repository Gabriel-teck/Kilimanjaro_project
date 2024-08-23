import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = {
        // id: action.payload,
        item: action.payload,
      };
      state.cartItems.push(cart);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
