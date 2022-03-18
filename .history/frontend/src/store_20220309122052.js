import { configureStore } from "@reduxjs/toolkit";
import { likePostReducer } from "./Reducers/Post";
import {
  userReducer,
  postOfFollowingReducer,
  allUsersReducer,
} from "./Reducers/User";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likePost: likePostReducer,
  },
});

export default store;
