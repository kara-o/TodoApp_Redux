import {
  TOGGLE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  RECEIVE_TODOS_ERROR,
  CREATE_TODO
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return null;
    }
    case REQUEST_TODOS: {
      return {
        ...state,
        isFetching: true
      };
    }
    case RECEIVE_TODOS: {
      return {
        ...state,
        isFetching: false,
        items: action.todos,
        lastUpdated: action.receivedAt
      };
    }
    case RECEIVE_TODOS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case TOGGLE_TODO: {
      const { todo } = action.payload;

      return {
        ...state,
        items: [
          ...state.items.filter(t => t.id !== todo.id),
          { id: todo.id, text: todo.text, completed: !todo.completed }
        ].sort((a, b) => a.id - b.id)
      };
    }
    default:
      return state;
  }
};
