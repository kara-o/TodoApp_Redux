import * as actionTypes from './actionTypes';

export const postTodo = text => {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text
    })
  };
  return dispatch => {
    dispatch(requestCreateTodo());
    return fetch(`/api/todos`, config).then(res =>
      res.json().then(json => {
        dispatch(receiveCreatedTodo(json, text));
      })
    );
  };
};

export const requestCreateTodo = () => {
  return {
    type: actionTypes.REQUEST_CREATE_TODO
  };
};

export const receiveCreatedTodo = (id, text) => {
  return {
    type: actionTypes.RECEIVE_CREATED_TODO,
    id,
    text
  };
};

export const receiveCreatedTodoError = error => {
  return {
    type: actionTypes.RECEIVE_CREATED_TODO_ERROR,
    error
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
    dispatch(requestTodos());
    return fetch(`/api/todos`)
      .then(res => res.json())
      .then(json => {
        dispatch(receiveTodos(json));
      });
  };
};
