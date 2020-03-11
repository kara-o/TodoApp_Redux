import * as actionTypes from './actionTypes';

export const createTodo = text => {
  console.log('here in create!', text);
  return {
    type: actionTypes.CREATE_TODO,
    text
  };
};

export const toggleTodo = todo => {
  return {
    type: actionTypes.TOGGLE_TODO,
    todo
  };
};

export const requestTodos = () => {
  return {
    type: actionTypes.REQUEST_TODOS
  };
};

export const receiveTodos = json => {
  return {
    type: actionTypes.RECEIVE_TODOS,
    todos: json,
    receivedAt: Date.now()
  };
};

export const receiveTodosError = error => {
  return {
    type: actionTypes.RECEIVE_TODOS_ERROR,
    error
  };
};

export const selectFilter = filter => {
  return {
    type: actionTypes.SELECT_FILTER,
    filter
  };
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos);
    return fetch(`/api/todos`)
      .then(res => res.json())
      .then(json => {
        dispatch(receiveTodos(json));
      });
  };
};
