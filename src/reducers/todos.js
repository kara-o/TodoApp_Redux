import {
  TOGGLE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  RECEIVE_TODOS_ERROR,
  REQUEST_CREATE_TODO,
  RECEIVE_CREATED_TODO,
  RECEIVE_CREATED_TODO_ERROR
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
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
    case REQUEST_CREATE_TODO: {
      return {
        ...state,
        isFetching: true
      };
    }
    case RECEIVE_CREATED_TODO: {
      return {
        ...state,
        isFetching: false,
        items: [
          ...state.items,
          { id: action.id, text: action.text, completed: false }
        ]
      };
    }
    case RECEIVE_CREATED_TODO_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case TOGGLE_TODO: {
      const { todo } = action;

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
