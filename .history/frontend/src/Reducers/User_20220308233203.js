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
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state, action) => {
    state.isLoading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    state.isAuthenticated = false;
  },
});

export const postOfFollowingReducer = createReducer(initialState, {
  PostOfFollowingRequest: (state, action) => {
    state.isLoading = true;
  },
  PostOfFollowingSuccess: (state, action) => {
    state.posts = action.payload;
    state.isLoading = false;
  },
  PostOfFollowingFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  clearErrors: (state, action) => {
    state.error = null;
  },
});
