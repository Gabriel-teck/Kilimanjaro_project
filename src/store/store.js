import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../features/cart/cartSlice";
import authReducers from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducers,
    auth: authReducers,
  },
});
