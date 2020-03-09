import * as actionTypes from './actionTypes';

export const addTodo = (id, text) => ({
  type: actionTypes.ADD_TODO,
  payload: { id, text }
});

export const toggleTodo = todo => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: { todo }
  };
};

export const setTodos = todos => {
  return {
    type: actionTypes.SET_TODOS,
    payload: { todos }
  };
};
