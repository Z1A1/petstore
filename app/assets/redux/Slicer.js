import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "array",
  initialState: [],

  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
