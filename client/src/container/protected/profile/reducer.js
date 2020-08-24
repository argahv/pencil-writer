import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  posts: [],
  scores: {
    points: 0,
    level: "",
    fires: 0,
  },
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_USER_POSTS_REQUEST:
        draft.loading = true;
        break;
      case types.GET_USER_POSTS_SUCCESS:
        draft.posts = action.payload;
        draft.loading = false;
        break;
      case types.GET_USER_POSTS_FAILURE:
        draft.loading = false;
        draft.posts = INITIAL_STATE.posts;
      case types.GET_USER_SCORES_REQUEST:
        draft.loading = true;
        break;
      case types.GET_USER_SCORES_SUCCESS:
        draft.scores = action.payload;
        draft.loading = false;
        break;
      case types.GET_USER_SCORES_FAILURE:
        draft.loading = false;
        draft.posts = INITIAL_STATE.posts;
      case types.DELETE_POST_REQUEST:
        draft.loading = true;
        break;
      case types.DELETE_POST_SUCCESS:
        draft.loading = false;
        break;
    }
  });
export default reducer;
