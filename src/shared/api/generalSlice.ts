import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ColorMode = "light" | "dark";

export interface GeneralState {
  colorMode: ColorMode;
}

const initialState: GeneralState = {
  colorMode: "light",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setColorMode(state, action: PayloadAction<ColorMode>) {
      state.colorMode = action.payload;
    },
    toggleColorMode(state) {
      state.colorMode = state.colorMode === "light" ? "dark" : "light";
    },
  },
});

export const { setColorMode, toggleColorMode } = generalSlice.actions;

export const selectColorMode = (state: { general: GeneralState }) =>
  state.general.colorMode;

export default generalSlice.reducer;
