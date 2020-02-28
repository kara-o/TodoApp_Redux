import * as actionTypes from './actionTypes';

let currentId = 0;

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  payload: {
    text,
    id: ++currentId
  }
});

export const toggleTodo = id => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: { id }
  };
};
