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

export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch({ type: "AddCommentRequest" });
    const { data } = await axios.put(
      `/api/v1/post/comment/${id}`,
      {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "AddCommentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "AddCommentFailure",
      payload: error.data.response.message,
    });
  }
};

export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteCommentRequest" });
    const { data } = await axios.delete(`/api/v1/post/comment/${id}`, {
      data: commentId,
    });
    dispatch({ type: "DeleteCommentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "DeleteCommentFailure",
      payload: error.data.response.message,
    });
  }
};

export const myPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "MyPostsRequest" });
    const { data } = await axios.get("/api/v1/post/myposts");
    dispatch({ type: "MyPostsSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "MyPostsFailure",
      payload: error.data.response.message,
    });
  }
};
