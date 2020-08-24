import * as types from "./types";
import { postEdit, categoryGet, postView, postDelete } from "../../../../api";
import { selectData } from "./selectors";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const resetForm = (payload) => ({
  type: types.RESET_FORM_VALUE,
  payload,
});

export const editPostRequest = (payload) => ({
  type: types.CREATE_POST_REQUEST,
  payload,
});
export const editPostSuccess = (payload) => ({
  type: types.CREATE_POST_SUCCESS,
  payload,
});
export const editPostFailure = (payload) => ({
  type: types.CREATE_POST_FAILURE,
  payload,
});

export const editPost = (id) => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(editPostRequest(id, data));
  try {
    const response = await postEdit(id, data);
    dispatch(editPostSuccess(id, data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(editPostFailure(err.response));
    } else {
      dispatch(editPostFailure({ error: "Please, Check your connection." }));
    }
    throw err;
  }
};
export const getCategoriesRequest = (payload) => ({
  type: types.GET_CATEGORIES_REQUEST,
  payload,
});
export const getCategoriesSuccess = (payload) => ({
  type: types.GET_CATEGORIES_SUCCESS,
  payload,
});
export const getCategoriesFailure = (payload) => ({
  type: types.GET_CATEGORIES_FAILURE,
  payload,
});

export const getCategories = () => async (dispatch, getState) => {
  dispatch(getCategoriesRequest());
  try {
    const response = await categoryGet();
    dispatch(getCategoriesSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(getCategoriesFailure(err.response));
    } else {
      dispatch(
        getCategoriesFailure({ error: "Please, Check your connection." })
      );
    }
    throw err;
  }
};

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
