import { produce } from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    fullName: "",
    email: "",
    message: "",
  },
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA_VALUE:
        draft.data[action.payload.index] = action.payload.value;
        break;
      case types.SEND_INQUIRY_REQUEST:
        draft.loading = true;
        break;
      case types.SEND_INQUIRY_SUCCESS:
        draft.loading = false;
        draft.data = INITIAL_STATE.data;
        break;
      case types.RESET_FORM:
        draft.data = INITIAL_STATE.data;
    }
  });

export default reducer;
