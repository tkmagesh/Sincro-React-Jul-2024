import { createSlice } from "@reduxjs/toolkit";

const spinnerSlice = createSlice({
  name: "spinnerState",
  initialState: 999,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export default spinnerSlice;