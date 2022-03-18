import { createReducer } from '@reduxjs/toolkit';   

const initialState = {}


export const userReducer = createReducer(initialState, {
    loginRequest: (state, action) => {
        state.isLoading = true;
    },
    loginSuccess: (state, action) => {
        state.user = action.payload
    },
    loginFailure: (state, action) => {
        state.error = action.payload
    }

