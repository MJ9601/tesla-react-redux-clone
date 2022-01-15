import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { controllers, pageConfig } from "../setControllerAndPageArrengment";

const initialState = {
  homeSlider: false,
  controllers: {},
  arrengmentOfDisplayPage: [],
  siteConfig: {},
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
      state.controllers = action.payload;
    },
    updateOneControllerStatus: (state, action) => {
      state.controllers[Object.keys(action.payload)[0]] = Object.values(
        action.payload
      )[0];
    },
    setArrengmentOfDisplayPage: (state, action) => {
      state.arrengmentOfDisplayPage = action.payload;
    },
    setSiteConfig: (state, action) => {
      state.siteConfig = action.payload;
    },
  },
});

export const {
  activedHomeSlider,
  deActivedHomeSlider,
  setController,
  updateOneControllerStatus,
  setArrengmentOfDisplayPage,
  setSiteConfig,
} = displaySlice.actions;

export const selectHomeSlider = (state) => state.display.homeSlider;
export const selectController = (state) => state.display.controllers;
export const selectSiteConfig = (state) => state.display.siteConfig;
export const selectArrengmentOfDisplayPage = (state) =>
  state.display.arrengmentOfDisplayPage;

export default displaySlice.reducer;
