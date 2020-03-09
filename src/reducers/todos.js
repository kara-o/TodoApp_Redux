import { TOGGLE_TODO, ADD_TODO, SET_TODOS } from '../actions/actionTypes';

// we are going to keep an array of just ids for ordering purposes - we don't want to order of the todos to always change!  can't guarantee order
// we are storing the actual todos in an object, as individual objects, with id as key/todo as value

const initialState = {
  todosById: {},
  orderedIds: [],
  allTodos: []
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      const { todos } = action.payload;
      return {
        ...state,
        allTodos: [...state.allTodos, ...todos]
      };
    }
    case ADD_TODO: {
      const { text, id } = action.payload;
      return {
        ...state,
        todosById: {
          ...state.todosById,
          [id]: {
            text,
            completed: false
          }
        },
        orderedIds: [...state.orderedIds, id]
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todosById: {
          ...state.todosById,
          [id]: {
            text: state.todosById[id].text,
            completed: !state.todosById[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
};
