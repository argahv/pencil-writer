import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    popularCategories: [],
    popularPosts: [],
  },
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SIDE_DATA_LOAD_REQUEST:
        draft.loading = true;
        break;
      case types.SIDE_DATA_LOAD_SUCCESS:
        draft.data = action.payload;
        draft.loading = false;
        break;
      case types.SIDE_DATA_LOAD_FAILURE:
        draft.data = INITIAL_STATE;
        break;
    }
  });

export default reducer;
