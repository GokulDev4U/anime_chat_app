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

  RegisterRequest: (state) => {
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

  LogoutUserRequest: (state) => {
    state.isLoading = true;
  },
  LogoutUserSuccess: (state) => {
    state.user = null;
    state.isLoading = false;
    state.isAuthenticated = false;
  },
  LogoutUserFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
    state.isAuthenticated = true;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const postOfFollowingReducer = createReducer(initialState, {
  PostOfFollowingRequest: (state) => {
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
  clearErrors: (state) => {
    state.error = null;
  },
});

export const allUsersReducer = createReducer(initialState, {
  AllUsersRequest: (state) => {
    state.isLoading = true;
  },
  AllUsersSuccess: (state, action) => {
    state.users = action.payload;
    state.isLoading = false;
  },
  AllUsersFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const userProfileReducer = createReducer(initialState, {
  userProfileRequest: (state) => {
    state.isLoading = true;
  },
  userProfileSuccess: (state, action) => {
    state.users = action.payload;
    state.isLoading = false;
  },
  userProfileFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
