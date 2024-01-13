import { createSlice } from "@reduxjs/toolkit";
import { clear } from "console";

const focusCategoryComponentSlice = createSlice({
  name: "focusCategoryComponent",
  initialState: {
    focusCategoryComponent: null,
  },
  reducers: {
    setFocusedComponent: (state, action) => {
      state.focusCategoryComponent = action.payload;
    },
    clearFocusedComponent: (state) => {
      state.focusCategoryComponent = null;
    },
  },
});



export const { setFocusedComponent, clearFocusedComponent } =
  focusCategoryComponentSlice.actions;

export default focusCategoryComponentSlice.reducer;