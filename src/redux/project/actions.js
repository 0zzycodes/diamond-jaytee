import { ProjectActionTypes } from "./types";

export const setProjects = (project) => ({
  type: ProjectActionTypes.SET_PROJECTS,
  payload: project,
});
