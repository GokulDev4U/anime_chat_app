import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const userReducer = createReducer(initialState, {
  loginRequest: (state, action) => {
    state.isLoading = true;
  },
  loginSuccess: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
  },
  loginFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  RegisterRequest: (state, action) => {
    state.isLoading = true;
  },
  RegisterSuccess: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
  },
  RegisterFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
});
