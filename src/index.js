import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <PersistGate persistor={persistor}>
          {/* <React.StrictMode> */}
          <App />
          {/* </React.StrictMode> */}
        </PersistGate>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
