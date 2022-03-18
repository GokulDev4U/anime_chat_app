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

  UpdatePasswordRequest: (state) => {
    state.isLoading = true;
  },
  UpdatePasswordSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  UpdatePasswordFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  DeleteProfileRequest: (state) => {
    state.isLoading = true;
  },
  DeleteProfileSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  DeleteProfileFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  ForgotPasswordRequest: (state) => {
    state.isLoading = true;
  },
  ForgotPasswordSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  ForgotPasswordFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  ResetPasswordRequest: (state) => {
    state.isLoading = true;
  },
  ResetPasswordSuccess: (state, action) => {
    state.message = action.payload;
    state.isLoading = false;
  },
  ResetPasswordFailure: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  followUserRequest: (state) => {
    state.loading = true;
  },
  followUserSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  followUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
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

export const userPostsReducer = createReducer(initialState, {
  userPostsRequest: (state) => {
    state.loading = true;
  },
  userPostsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  userPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
