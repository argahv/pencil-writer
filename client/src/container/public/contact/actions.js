import * as types from "./types";
import { selectData } from "./selectors";
import { inquirySend } from "../../../api";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const sendInquiryRequest = (payload) => ({
  type: types.SEND_INQUIRY_REQUEST,
  payload,
});
export const sendInquirySuccess = (payload) => ({
  type: types.SEND_INQUIRY_SUCCESS,
  payload,
});
export const sendInquiryFailure = (payload) => ({
  type: types.SEND_INQUIRY_FAILURE,
  payload,
});

export const sendInquiry = () => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(sendInquiryRequest(data));
  try {
    const response = await inquirySend(data);
    dispatch(sendInquirySuccess(response.data));
    return response.data;
  } catch (error) {
    if (error.response) {
      dispatch(sendInquiryFailure(error.response));
    } else {
      dispatch(sendInquiryFailure(error.message));
    }
    throw error;
  }
};
