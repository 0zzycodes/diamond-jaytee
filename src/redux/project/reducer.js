import { ProjectActionTypes } from "./types";

const INITIAL_STATE = {
  projects: [],
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.SET_PROJECTS:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
