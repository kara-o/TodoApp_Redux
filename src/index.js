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
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = {
  users: {
    isFetching: false,
    user: loadState().user,
    error: null,
  },
  todos: {
    isFetching: false,
    items: loadState().items,
    error: null,
  },
};

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(
  throttle(() => {
    //only write to local storage at most 1/sec, using throttle wrapper
    saveState({
      user: store.getState().users.user,
      items: store.getState().todos.items,
    });
  }, 1000)
);

const rootElement = document.getElementById("root");

render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
      </Router>
    </Provider>
  </Auth0Provider>,
  rootElement
);
