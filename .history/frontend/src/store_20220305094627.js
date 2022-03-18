import { configureStore } from "reduxjs/toolkit";
import { reducer } from "./reducer";

const initialState = {};

const store = configureStore(initialState, {
  reducer: {},
});

export default store;
