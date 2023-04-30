import { createSlice } from "@reduxjs/toolkit";
import { creativeMenu } from "../menu data/creativeMenu";
export const creativeSlice = createSlice({
  name: "creativeMenu",
  initialState: creativeMenu,
  reducers: {
    addCreativeProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addCreativeProduct } = creativeSlice.actions;
export default creativeSlice.reducer;
