import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

const selectGlobal = (state) => state.global || INITIAL_STATE;

export const selectUser = createSelector([selectGlobal], (state) => state.user);

export const selectIsLoggedIn = createSelector(
  [selectGlobal],
  (state) => state.user
);
