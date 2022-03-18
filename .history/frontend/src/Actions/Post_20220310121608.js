import axios from "axios";

export const likePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: "LikePostRequest" });
    const { data } = await axios.get(`/api/v1/post/${postId}`);
    dispatch({ type: "LikePostSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "LikePostFailure", payload: error.data.response.message });
  }
};
export const addCommentOnPost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: "AddCommentRequest" });
    const { data } = await axios.get(`/api/v1/post/comment/${postId}`);
    dispatch({ type: "AddCommentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "AddCommentFailure",
      payload: error.data.response.message,
    });
  }
};
