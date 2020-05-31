import { todoActions } from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  items: [],
  error: null,
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.REQUEST_TODOS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case todoActions.RECEIVE_TODOS: {
      return {
        ...state,
        isFetching: false,
        items: action.todos,
        lastUpdated: action.receivedAt,
      };
    }
    case todoActions.RECEIVE_TODOS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case todoActions.REQUEST_CREATE_TODO: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case todoActions.RECEIVE_CREATED_TODO: {
      return {
        ...state,
        isFetching: false,
        items: [
          ...state.items,
          { id: action.id, text: action.text, completed: false },
        ],
      };
    }
    case todoActions.RECEIVE_CREATED_TODO_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case todoActions.TOGGLE_TODO: {
      const { todo } = action;

      return {
        ...state,
        items: [
          ...state.items.filter((t) => t.id !== todo.id),
          { id: todo.id, text: todo.text, completed: !todo.completed },
        ].sort((a, b) => a.id - b.id),
      };
    }
    default:
      return state;
  }
};
