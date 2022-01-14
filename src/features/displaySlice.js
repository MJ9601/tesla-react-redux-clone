import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeSlider: false,
  controllers: {},
  status: "idle",
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    activedHomeSlider: (state) => {
      state.homeSlider = true;
    },
    deActivedHomeSlider: (state) => {
      state.homeSlider = false;
    },
    setController: (state, action) => {
      Object.assign(state.controllers, action.payload);
    },
    updateOneControllerStatus: (state, action) => {
      delete state.controllers[Object.keys(action.payload)[0]];
      Object.assign(state.controllers, action.payload);
    },
  },
});

export const {
  activedHomeSlider,
  deActivedHomeSlider,
  setController,
  updateOneControllerStatus,
} = displaySlice.actions;

export const selectHomeSlider = (state) => state.display.homeSlider;
export const selectController = (state) => state.display.controllers;

export default displaySlice.reducer;
