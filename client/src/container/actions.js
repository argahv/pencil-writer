import * as types from "./types";
import { userDetailGet } from "../api";

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});

export const getUserRequest = (payload) => ({
  type: types.GET_USER_REQUEST,
  payload,
});
export const getUserSuccess = (payload) => ({
  type: types.GET_USER_SUCCESS,
  payload,
});
export const getUserFailure = (payload) => ({
  type: types.GET_USER_FAILURE,
  payload,
});

export const getUser = (payload) => async (dispatch) => {
  dispatch(getUserRequest(payload));
  try {
    const response = await userDetailGet();
    dispatch(getUserSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(getUserFailure(err.response.data));
    } else {
      dispatch(getUserFailure(err.message));
    }
    throw err;
  }
};

// export const logoutUser = () => async (dispatch) => {
//   localStorage.clear();
//   dispatch(setToken(""));
// };
