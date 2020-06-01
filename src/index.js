import React from "react";
import { render } from "react-dom";
import App from "./App";
import rootReducer from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import SignUpUser from "./components/SignUpUser";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = {
  users: {
    isFetching: false,
    user: loadState(),
    error: null,
  },
};

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

console.log("STORE: ", store.getState());

store.subscribe(
  throttle(() => {
    //only write to local storage at most 1/sec, using throttle wrapper
    saveState({
      user: store.getState().users.user,
    });
  }, 1000)
);

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <Router>
      <Route path="/signup" component={SignUpUser} />
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  rootElement
);
