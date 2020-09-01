import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ProjectReducer from "./project/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["projects"],
};

const rootReducer = combineReducers({
  projects: ProjectReducer,
});

export default persistReducer(persistConfig, rootReducer);
