import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "public_side_data";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);

export const selectCategoriesList = createSelector(
  [selectData],
  (state) => state.popularCategories
);

export const selectPostsList = createSelector(
  [selectData],
  (state) => state.popularPosts
);
