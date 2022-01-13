import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import userReducer from "../features/userSlice";
import displayReducer from "../features/displaySlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
    user: userReducer,
    product: productReducer,
  },
});
