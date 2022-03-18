import { configureStore } from "@reduxjs/toolkit";
import { likePostReducer, myPostsReducer } from "./Reducers/Post";
import {
  userReducer,
  postOfFollowingReducer,
  allUsersReducer,
  userProfileReducer,
} from "./Reducers/User";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likePost: likePostReducer,
    myPosts: myPostsReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
