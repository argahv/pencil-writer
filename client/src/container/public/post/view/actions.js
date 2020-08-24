import { postView, profitsIncrease, postDelete } from "../../../../api";
import * as types from "./types";

export const singlePostViewRequest = (payload) => ({
  type: types.SINGLE_POST_VIEW_REQUEST,
  payload,
});
export const singlePostViewSuccess = (payload) => ({
  type: types.SINGLE_POST_VIEW_SUCCESS,
  payload,
});
export const singlePostViewFailure = (payload) => ({
  type: types.SINGLE_POST_VIEW_FAILURE,
  payload,
});

export const singlePostView = (id) => async (dispatch) => {
  dispatch(singlePostViewRequest(id));

  try {
    const response = await postView(id);
    dispatch(singlePostViewSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(singlePostViewFailure(err.response));
    } else {
      dispatch(singlePostViewFailure(err.message));
    }
    throw err;
  }
};

export const increaseProfitsRequest = (payload) => ({
  type: types.INCREASE_PROFITS_REQUEST,
  payload,
});
export const increaseProfitsSuccess = (payload) => ({
  type: types.INCREASE_PROFITS_SUCCESS,
  payload,
});
export const increaseProfitsFailure = (payload) => ({
  type: types.INCREASE_PROFITS_FAILURE,
  payload,
});

export const increaseProfits = (id, type) => async (dispatch) => {
  dispatch(increaseProfitsRequest(id, type));

  try {
    const response = await profitsIncrease(id, type);
    dispatch(increaseProfitsSuccess(response.data));
    console.log("response.data", response.data);
    return response;
  } catch (err) {
    if (err.response) {
      dispatch(increaseProfitsFailure(err.response));
    } else {
      dispatch(increaseProfitsFailure(err.message));
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
