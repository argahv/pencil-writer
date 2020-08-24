import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "private_user_profile";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectPost = createSelector([selectRoot], (state) => state.posts);

export const selectScores = createSelector(
  [selectRoot],
  (state) => state.scores
);

export const selectPostLength = createSelector(
  [selectPost],
  (state) => state.length
);
