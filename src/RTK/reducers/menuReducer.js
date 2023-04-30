import { createSlice } from "@reduxjs/toolkit";
import { mainMenu } from "../menu data/mainMenu";
export const menuSlice = createSlice({
  name: "mainMenu",
  initialState: [],
  reducers: {
    getMenuProd: (state) => {
      state = mainMenu;
      return state;
    },
  },
});
export const { getMenuProd } = menuSlice.actions;
export default menuSlice.reducer;
