import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  purchaseList: [],
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.user = null;
    },
    addToPurchaseList: (state, action) => {
      state.purchaseList = [...state.purchaseList, action.payload];
    },
    removeFromPurchaseList: (state, action) => {
      state.purchaseList = state.purchaseList.filter(
        (purchaseItem) => purchaseItem.id != action.payload.id
      );
    },
    emptyPurchaseList: (state) => {
      state.purchaseList = [];
    },
  },
});

export const {
  LOGIN,
  LOGOUT,
  addToPurchaseList,
  emptyPurchaseList,
  removeFromPurchaseList,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectPurchaseList = (state) => state.user.purchaseList;

export default userSlice.reducer;
