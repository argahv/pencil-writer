import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  post: {
    author: {
      _authorId: "",
      authorName: "",
      profilePic: "",
    },
    isPublic: true,
    fires: {
      count: 0,
      users: [],
    },
    points: {
      count: 0,
      users: [],
    },
    _id: "",
    tags: [],
    image: "",
    title: "",
    content: "",
    category: "",
    createdAt: "",
    summary: "",
  },
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SINGLE_POST_VIEW_REQUEST:
        draft.loading = true;
        break;
      case types.SINGLE_POST_VIEW_SUCCESS:
        draft.post = action.payload.post;
        draft.loading = false;
        break;
      case types.SINGLE_POST_VIEW_FAILURE:
        draft.loading = false;
        draft.post = INITIAL_STATE.post;
        break;
      case types.INCREASE_PROFITS_REQUEST:
        // draft.post.fires = action.payload.fires;
        // draft.post.point = action.payload.points;
        break;
      case types.INCREASE_PROFITS_SUCCESS:
        // draft.post.fires = action.payload.fires;
        // draft.post.point = action.payload.points;
        draft.post = action.payload;
        break;
      case types.INCREASE_PROFITS_FAILURE:
        draft.post.fire = "";
        draft.post.point = "";
        break;
      default:
        draft.post = INITIAL_STATE.post;
    }
  });

export default reducer;
