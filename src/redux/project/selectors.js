import { createSelector } from "reselect";
const selectProjects = (state) => state.projects;

export const selectAllproject = createSelector(
  [selectProjects],
  (items) => items.projects
);
