import produce from "immer";
import * as types from "./types";
// import { testData } from "./testData";

export const INITIAL_STATE = {
  loading: false,
  filtered: false,
  query: {
    limit: "10",
    page: "1",
    pageCount: "",
    count: "",
    total: "",
    sort: {},
    search: {
      searchField: "" || [],
      searchValue: "" || [],
    },
  },
  categories: [],
  data: {
    // posts: testData,
    posts: [],
    paginator: {
      hasNextPage: false,
      hasPrevPage: false,
      limit: 15,
      next: null,
      page: 1,
      pageCount: 1,
      prev: null,
      slNo: 0,
      total: 0,
    },
  },
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_VALUE:
        draft[action.payload.key][action.payload.index] = action.payload.value;
        break;
      case types.RESET_QUERY:
        draft.query = INITIAL_STATE.query;
        break;
      case types.GET_POST_REQUEST:
        draft.loading = true;
        draft.error = INITIAL_STATE.error;
        break;
      case types.GET_POST_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case types.GET_POST_FAILURE:
        draft.error = action.payload;
        draft.loading = false;
        break;
      case types.DELETE_POST_REQUEST:
        draft.loading = true;
        break;
      case types.DELETE_POST_SUCCESS:
        draft.loading = false;
        break;
      case types.GET_CATEGORIES_SUCCESS:
        draft.categories = action.payload.categories;
        break;
    }
  });

export default reducer;
