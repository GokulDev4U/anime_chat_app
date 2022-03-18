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
    const { data } = await axios.get("/api/v1/postOfFollowing");
    dispatch({ type: "PostOfFollowingSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "PostOfFollowingFailure",
      payload: error.data.response.message,
    });
  }
};