import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
  } catch (error) {}

  dispatch({ type: LOGIN_USER });
  axios
    .post("/api/login", { email, password })
    .then((res) => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: err.response.data.msg,
      });
    });
};
