import axios from "axios";

export const likePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: "LikePostRequest" });
    const { data } = await axios.get(`/api/v1/post/${postId}`);
    dispatch({ type: "LikePostSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "LikePostFailure", payload: error.response.data.message });
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
      payload: error.response.data.message,
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
      payload: error.response.data.message,
    });
  }
};

export const myPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "MyPostsRequest" });
    const { data } = await axios.get("/api/v1/my/posts");
    dispatch({ type: "MyPostsSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "MyPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const createNewPost = (image, caption) => async (dispatch) => {
  try {
    dispatch({ type: "NewPostRequest" });
    const { data } = await axios.post(
      "/api/v1/post/upload",
      {
        image,
        caption,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "NewPostSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "NewPostFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateCaption = (id, caption) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateCaptionRequest" });
    const { data } = await axios.put(
      `/api/v1/post/${id}`,
      {
        caption,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "UpdateCaptionSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UpdateCaptionFailure",
      payload: error.response.data.message,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeletePostRequest" });
    const { data } = await axios.delete(`/api/v1/post/${id}`);
    dispatch({ type: "DeletePostSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "DeletePostFailure",
      payload: error.response.data.message,
    });
  }
};
