import * as types from "./types";
import { postGet, postDelete, categoryGet } from "../../../../api";
import { selectQuery } from "./selectors";
import Qs from "query-string";
import { flatten } from "../../../../utils/helpers";

export const setValue = (payload) => ({
  type: types.SET_VALUE,
  payload,
});

export const resetQuery = (payload) => ({
  type: types.RESET_QUERY,
  payload,
});

export const getPostRequest = (payload) => ({
  type: types.GET_POST_REQUEST,
  payload,
});
export const getPostSuccess = (payload) => ({
  type: types.GET_POST_SUCCESS,
  payload,
});
export const getPostFailure = (payload) => ({
  type: types.GET_POST_FAILURE,
  payload,
});

export const getPost = () => async (dispatch, getState) => {
  const queryObj = selectQuery(getState());
  const flattened = flatten(queryObj);
  const query = Qs.stringify(flattened);
  dispatch(getPostRequest(query));
  try {
    const response = await postGet(query);
    dispatch(getPostSuccess(response.data.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(getPostFailure(err.response));
    } else {
      dispatch(getPostFailure(err.message));
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
