import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slicer";

const store = configureStore({
  reducer: {
    array: counterReducer,
  },
});

export default store;
