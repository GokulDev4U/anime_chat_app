import axios from "axios";

const likePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: "LikePostRequest" });
    const { data } = await axios.post(`/api/v1/posts/${postId}/like`);
    dispatch({ type: "LikePostSuccess", payload: data.post });
  } catch (error) {
    dispatch({ type: "LikePostFailure", payload: error.data.response.message });
  }
};
