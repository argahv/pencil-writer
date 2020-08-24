import { INITIAL_STATE } from "./reducer";
import { createSelector } from "reselect";

export const reduxKey = "public_contact";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);
