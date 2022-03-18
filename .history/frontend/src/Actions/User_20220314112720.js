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
    await axios.get("/api/v1/logout");
    dispatch({ type: "LogoutUserSuccess" });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.data.response.message,
    });
  }
};

export const registerUser =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      dispatch({ type: "RegisterRequest" });
      const { data } = await axios.post(
        "/api/v1/register",
        { name, email, password, avatar },
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch({ type: "RegisterSuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.data.response.message,
      });
    }
  };

export const updateProfile = (name, email, avatar) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateProfileRequest" });
    const { data } = await axios.put(
      "/api/v1/me",
      { name, email, avatar },
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({ type: "UpdateProfileSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "UpdateProfileFailure",
      payload: error.data.response.message,
    });
  }
};
