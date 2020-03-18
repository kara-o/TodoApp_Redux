import React from 'react';
import { render } from 'react-dom';
import App from './App';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import { fetchTodos } from './actions/todos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// store.dispatch(fetchTodos()).then(() => console.log(store.getState()));

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  rootElement
);
