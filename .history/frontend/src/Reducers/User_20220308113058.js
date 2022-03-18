import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state, action) => {
    state.isLoading = true;
  },
  LoginSuccess: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    state.isAuthenticated = false;
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

  LoadUserRequest: (state, action) => {
    state.isLoading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
  },
  LoadUserFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
});
