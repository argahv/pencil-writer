import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "public_post_view";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectPost = createSelector([selectRoot], (state) => state.post);

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectFires = createSelector([selectPost], (state) => state.fires);
export const selectPoints = createSelector(
  [selectPost],
  (state) => state.points
);
