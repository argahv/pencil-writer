import { userPostsGet, postDelete, userScoresGet } from "../../../api";
import { selectUser } from "../../selectors";
import * as types from "./types";

export const getUserPostsRequest = (payload) => ({
  type: types.GET_USER_POSTS_REQUEST,
  payload,
});
export const getUserPostsSuccess = (payload) => ({
  type: types.GET_USER_POSTS_SUCCESS,
  payload,
});
export const getUserPostsFailure = (payload) => ({
  type: types.GET_USER_POSTS_FAILURE,
  payload,
});

export const getUserPosts = () => async (dispatch, getState) => {
  const user = selectUser(getState());
  dispatch(getUserPostsRequest(user._id));
  try {
    const response = await userPostsGet(user._id);
    dispatch(getUserPostsSuccess(response.data.userPost));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(getUserPostsFailure(err.response));
    } else {
      dispatch(
        getUserPostsFailure({ error: "Please, Check your connection." })
      );
    }
    throw err;
  }
};

export const getUserScoresRequest = (payload) => ({
  type: types.GET_USER_SCORES_REQUEST,
  payload,
});
export const getUserScoresSuccess = (payload) => ({
  type: types.GET_USER_SCORES_SUCCESS,
  payload,
});
export const getUserScoresFailure = (payload) => ({
  type: types.GET_USER_SCORES_FAILURE,
  payload,
});

export const getUserScores = () => async (dispatch, getState) => {
  const user = selectUser(getState());
  dispatch(getUserScoresRequest(user._id));
  try {
    const response = await userScoresGet(user._id);
    dispatch(getUserScoresSuccess(response.data.userScores));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(getUserScoresFailure(err.response));
    } else {
      dispatch(
        getUserScoresFailure({ error: "Please, Check your connection." })
      );
    }
    throw err;
  }
};

export const deletePostRequest = (payload) => ({
  type: types.DELETE_POST_REQUEST,
  payload,
});
export const deletePostSuccess = (payload) => ({
  type: types.DELETE_POST_SUCCESS,
  payload,
});
export const deletePostFailure = (payload) => ({
  type: types.DELETE_POST_FAILURE,
  payload,
});

export const deletePost = (id) => async (dispatch) => {
  dispatch(deletePostRequest(id));
  try {
    const response = await postDelete(id);
    dispatch(deletePostSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(deletePostFailure(err.response));
    } else {
      dispatch(deletePostFailure(err.message));
    }
    throw err;
  }
};
