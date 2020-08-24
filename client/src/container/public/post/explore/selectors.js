import { createSelector } from "reselect";

import { INITIAL_STATE } from "./reducers";

export const reduxKey = "public_posts_list";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectData = createSelector([selectRoot], (state) => state.data);

export const selectPosts = createSelector([selectData], (state) => state.posts);

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectQuery = createSelector([selectRoot], (state) => state.query);

export const selectCategories = createSelector(
  [selectRoot],
  (state) => state.categories
);

export const selectPaginator = createSelector(
  [selectData],
  (state) => state.paginator
);
