import axios from "axios";

const likePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: "LikePostRequest" });
    const { data } = await axios.post(`/api/v1/post/${postId}`);
    dispatch({ type: "LikePostSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "LikePostFailure", payload: error.data.response.message });
  }
};
