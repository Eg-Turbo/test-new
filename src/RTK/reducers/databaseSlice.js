import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const mainmenu ="http://localhost:9000/mainmenu";
export const mainMenuSands = createAsyncThunk(
  "databaseSlice/mainMenuSands",
  async () => {
    let data = await axios.get(mainmenu).then(res=>res.data)
    return data;
  }
);
export const databaseSlice = createSlice({
  initialState: [],
  name: "databaseSlice",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(mainMenuSands.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default databaseSlice.reducer;
