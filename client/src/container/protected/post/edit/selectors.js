import { createSelector } from "reselect";

import { INITIAL_STATE } from "./reducers";

export const reduxKey = "protected_post_edit";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectData = createSelector([selectRoot], (state) => state.data);
export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectTags = createSelector([selectData], (state) => state.tags);

export const selectCategories = createSelector(
  [selectRoot],
  (state) => state.categories
);

export const selectPost = createSelector([selectRoot], (state) => state.post);
