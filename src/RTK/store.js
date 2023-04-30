import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./reducers/menuReducer";
import creativeReducer from "./reducers/creativeMenuReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer"
import databaseReducer from "./reducers/databaseSlice"
import filterReducer from "./reducers/FilterSandwitchReducer"
export const store = configureStore({
  reducer: {
    normalMenu: menuSlice,
    creativeMenu: creativeReducer,
    cart: cartReducer,
    orders:orderReducer,
    database:databaseReducer,
    filteredDate:filterReducer
  },
});
