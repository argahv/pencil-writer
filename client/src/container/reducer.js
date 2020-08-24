import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  user: null,
};

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.GET_CLIENT_REQUEST:
        draft.user = INITIAL_STATE.user;
        break;
      case types.GET_USER_SUCCESS:
        draft.user = payload;
        break;

      // default:
      //   return INITIAL_STATE;
    }
  });

export default reducer;
