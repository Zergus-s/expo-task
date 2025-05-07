import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ColorMode } from "@shared/model/general";

export interface GeneralState {
  colorMode: ColorMode;
}

const initialState: GeneralState = {
  colorMode: ColorMode.Light,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setColorMode(state, action: PayloadAction<ColorMode>) {
      state.colorMode = action.payload;
    },
    toggleColorMode(state) {
      state.colorMode =
        state.colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light;
    },
  },
});

export const { setColorMode, toggleColorMode } = generalSlice.actions;

export const selectColorMode = (state: { general: GeneralState }) =>
  state.general.colorMode;

export default generalSlice.reducer;
