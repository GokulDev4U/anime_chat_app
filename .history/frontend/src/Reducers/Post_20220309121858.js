import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const likePostReducer = createReducer(initialState, {
  LikePostRequest: (state) => {
    state.isLoading = true;
  },
  LikePostSuccess: (state, action) => {
    state.post = action.payload;
    state.isLoading = false;
  },
  LikePostFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
