import { createSlice } from "@reduxjs/toolkit";
// import {store} from "../store.js"

const filterReducer = createSlice({
  name: "filterReducer",
  initialState: [],
  reducers: {
    getFilteredDate : (state,action)=>{
      // let ss = SetState()
      console.log(action.payload);
    // state = []
    // let sandwitches = action.payload.sandwitches
    // let orders = action.payload.orders

      // sandwitches.forEach(sandwitch => {
      //   let sand = {...sandwitch,selamount:0}
      //   orders.forEach(dayorder=>{
      //     dayorder.orderDetails.forEach(order=>{
      //       order.sandwitches.forEach((ordersandwitch,ind)=>{
      //         if(sandwitch.id===ordersandwitch.id){
      //             sand.selamount+=ordersandwitch.amount
      //         }
              
      //       })

      //     })
          
      //   })
      //   state.push(sand)
      // });
  // return state
    }
  },
});
export const { getFilteredDate} = filterReducer.actions;
export default filterReducer.reducer;
