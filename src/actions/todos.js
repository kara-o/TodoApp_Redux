import { todoActions } from "./actionTypes";

export const postTodo = (text, userId) => {
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      userId,
    }),
  };
  return (dispatch) => {
    dispatch(requestCreateTodo());
    return fetch(`/api/todos`, config).then((res) =>
      res.json().then((json) => {
        dispatch(receiveCreatedTodo(json.id, text));
      })
    );
  };
};

export const requestCreateTodo = () => {
  return {
    type: todoActions.REQUEST_CREATE_TODO,
  };
};

export const receiveCreatedTodo = (id, text) => {
  return {
    type: todoActions.RECEIVE_CREATED_TODO,
    id,
    text,
  };
};

export const receiveCreatedTodoError = (error) => {
  return {
    type: todoActions.RECEIVE_CREATED_TODO_ERROR,
    error,
  };
};

export const toggleTodo = (todo) => {
  return {
    type: todoActions.TOGGLE_TODO,
    todo,
  };
};

export const requestTodos = () => {
  return {
    type: todoActions.REQUEST_TODOS,
  };
};

export const receiveTodos = (json) => {
  return {
    type: todoActions.RECEIVE_TODOS,
    todos: json,
  };
};

export const receiveTodosError = (error) => {
  return {
    type: todoActions.RECEIVE_TODOS_ERROR,
    error,
  };
};

export const fetchTodos = (userId) => {
  console.log("fetch todos with user id: ", userId);
  return (dispatch) => {
    dispatch(requestTodos());
    return fetch(`/api/todos?user_id=${userId}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveTodos(json));
      });
  };
};

export const deleteTodo = (todoId) => {
  //TODO error handling
  const config = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return (dispatch) => {
    dispatch(requestDeleteTodo());
    return fetch(`/api/todos/${todoId}`, config).then(
      dispatch(receiveDeleteTodoSuccess(todoId))
    );
  };
};

export const requestDeleteTodo = () => {
  return {
    type: todoActions.REQUEST_DELETE_TODO,
  };
};

export const receiveDeleteTodoSuccess = (id) => {
  return {
    type: todoActions.RECEIVE_DELETE_TODO_SUCCESS,
    id,
  };
};
