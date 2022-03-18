import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LoginRequest" });
    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({ type: "LoginSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "LoginFailure", payload: error.data.response.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });
    const { data } = await axios.get("/api/v1/me");
    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "LoadUserFailure", payload: error.data.response.message });
  }
};

export const getPostOfFollowing = () => async (dispatch) => {
  try {
    dispatch({ type: "PostOfFollowingRequest" });
    const { data } = await axios.get("/api/v1/posts");
    dispatch({ type: "PostOfFollowingSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "PostOfFollowingFailure",
      payload: error.data.response.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "AllUsersRequest" });
    const { data } = await axios.get("/api/v1/users");
    dispatch({ type: "AllUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "AllUsersFailure",
      payload: error.data.response.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LogoutUserRequest" });
    const { data } = await axios.post("/api/v1/logout");
    dispatch({ type: "LogoutUserSuccess" });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.data.response.message,
    });
  }
};
