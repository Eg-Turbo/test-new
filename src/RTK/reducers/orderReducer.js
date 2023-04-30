import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "orderSlice",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      const findorder = state.find(
        (order) => order.date === action.payload.date
      );
      if (findorder) {
        findorder.orderDetails.push(action.payload.orderDetails[0]);
      } else {
        state.push(action.payload);
      }
    },
  },
});
export const { addOrder, getOrderById } = orderSlice.actions;
export default orderSlice.reducer;
