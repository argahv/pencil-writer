import { sidePostsGet } from "../../../api";
import * as types from "./types";

export const sideDataLoadRequest = (payload) => ({
  type: types.SIDE_DATA_LOAD_REQUEST,
  payload,
});
export const sideDataLoadSuccess = (payload) => ({
  type: types.SIDE_DATA_LOAD_SUCCESS,
  payload,
});
export const sideDataLoadFailure = (payload) => ({
  type: types.SIDE_DATA_LOAD_FAILURE,
  payload,
});

export const sideDataLoad = () => async (dispatch, getState) => {
  dispatch(sideDataLoadRequest());
  try {
    const response = await sidePostsGet();
    dispatch(sideDataLoadSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(sideDataLoadFailure(err.response));
    } else {
      dispatch(sideDataLoadFailure(err.message));
    }
    throw err;
  }
};
