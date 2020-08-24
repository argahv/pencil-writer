import * as types from "./types";
import { postCreate, categoryGet } from "../../../../api";
import { selectData } from "./selectors";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const resetForm = (payload) => ({
  type: types.RESET_FORM_VALUE,
  payload,
});

export const createPostRequest = (payload) => ({
  type: types.CREATE_POST_REQUEST,
  payload,
});
export const createPostSuccess = (payload) => ({
  type: types.CREATE_POST_SUCCESS,
  payload,
});
export const createPostFailure = (payload) => ({
  type: types.CREATE_POST_FAILURE,
  payload,
});

export const createPost = () => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(createPostRequest(data));
  try {
    const response = await postCreate(data);
    dispatch(createPostSuccess(data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(createPostFailure(err.response));
    } else {
      dispatch(createPostFailure({ error: "Please, Check your connection." }));
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
