import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    title: "",
    content: "",
    summary: "",
    category: "",
    image: "",
  },
  post: {
    _id: "",
    // tags: [],
    image: "",
    title: "",
    content: "",
    category: "",
    summary: "",
  },
  categories: [],
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA_VALUE:
        draft.data[action.payload.key] = action.payload.value;
        break;
      case types.RESET_FORM_VALUE:
        draft.data = INITIAL_STATE;
        break;
      case types.CREATE_POST_REQUEST:
        draft.loading = true;
        draft.error = INITIAL_STATE.error;
        break;
      case types.CREATE_POST_SUCCESS:
        draft.loading = false;
        break;
      case types.CREATE_POST_FAILURE:
        draft.error = action.payload;
        draft.loading = false;
        break;
      case types.GET_CATEGORIES_SUCCESS:
        draft.categories = action.payload.categories;
        break;
      case types.SINGLE_POST_VIEW_SUCCESS:
        draft.post = action.payload.post;
    }
  });

export default reducer;
