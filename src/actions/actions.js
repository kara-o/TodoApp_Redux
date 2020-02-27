import * as actionTypes from './actionTypes';

let currentId = 0;

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  payload: {
    text: text,
    id: ++currentId
  }
});
