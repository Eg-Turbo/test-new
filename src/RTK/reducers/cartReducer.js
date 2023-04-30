import { createSlice } from "@reduxjs/toolkit";
 const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    getcartProd: (state) => {
      return state;
    },
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.amount += 1;
      } else {
        let prod = { ...action.payload };
        prod.amount = 1;
        state.push(prod);
      }
    },
    increaseAmount: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findProduct.amount += 1;
    },
    decreaseAmount: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findProduct.amount -= 1;
    },
    cleareCart: () => {
      return [];
    },

    deletefromCart: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload.id);
    },
  },
});
export const {
  getMenuProd,
  addToCart,
  increaseAmount,
  decreaseAmount,
  cleareCart,
  deletefromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
