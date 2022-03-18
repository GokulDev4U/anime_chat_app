import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const likePostReducer = createReducer(initialState, {
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },

  LikePostRequest: (state) => {
    state.isLoading = true;
  },
  LikePostSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  LikePostFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  AddCommentRequest: (state) => {
    state.isLoading = true;
  },
  AddCommentSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  AddCommentFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  DeleteCommentRequest: (state) => {
    state.isLoading = true;
  },
  DeleteCommentSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  DeleteCommentFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  NewPostRequest: (state) => {
    state.isLoading = true;
  },
  NewPostSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  NewPostFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  UpdateCaptionRequest: (state) => {
    state.isLoading = true;
  },
  UpdateCaptionSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  UpdateCaptionFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  DeletePostRequest: (state) => {
    state.isLoading = true;
  },
  DeletePostSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  DeletePostFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  UpdateProfileRequest: (state) => {
    state.isLoading = true;
  },
  UpdateProfileSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  UpdateProfileFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
});

export const myPostsReducer = createReducer(initialState, {
  MyPostsRequest: (state) => {
    state.isLoading = true;
  },
  MyPostsSuccess: (state, action) => {
    state.posts = action.payload;
    state.isLoading = false;
  },
  MyPostsFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
