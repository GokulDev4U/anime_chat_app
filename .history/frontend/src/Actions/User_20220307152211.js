import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {}
};
