import { TOGGLE_TODO, ADD_TODO, SET_TODOS } from '../actions/actionTypes';

// we are going to keep an array of just ids for ordering purposes - we don't want to order of the todos to always change!  can't guarantee order
// we are storing the actual todos in an object, as individual objects, with id as key/todo as value

const initialState = {
  allTodos: []
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      const { todos } = action.payload;
      console.log(todos);
      return {
        ...state,
        allTodos: [...state.allTodos, ...todos]
      };
    }
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        allTodos: [...state.allTodos, { id, text, completed: false }]
      };
    }
    case TOGGLE_TODO: {
      const { todo } = action.payload;

      return {
        ...state,
        allTodos: [
          ...state.allTodos.filter(t => t.id !== todo.id),
          { id: todo.id, text: todo.text, completed: !todo.completed }
        ].sort((a, b) => a.id - b.id)
      };
    }
    default:
      return state;
  }
};
