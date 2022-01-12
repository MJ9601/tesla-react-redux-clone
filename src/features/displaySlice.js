import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeSlider: false,
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
  },
});

export const { activedHomeSlider, deActivedHomeSlider } = displaySlice.actions;

export const selectHomeSlider = (state) => state.display.homeSlider;

export default displaySlice.reducer;
