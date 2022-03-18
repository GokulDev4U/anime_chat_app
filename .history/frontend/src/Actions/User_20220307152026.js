import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("/login", { email, password });
    dispatch({
      type: "LOGIN_USER",
      payload: res.data,
    });
  } catch (error) {}
};
