import { userActions } from "./actionTypes";
import { fetchTodos } from "./todos";

export const postUser = (username, email) => {
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
    }),
  };
  return (dispatch) => {
    dispatch(requestCreateUser());
    return fetch(`/api/users`, config).then((res) =>
      res.json().then((json) => {
        dispatch(receiveCreatedUser(json));
      })
    );
  };
};

export const requestCreateUser = () => {
  return {
    type: userActions.REQUEST_CREATE_USER,
  };
};

export const receiveCreatedUser = (id) => {
  return {
    type: userActions.RECEIVE_CREATED_USER,
    id,
  };
};

export const receiveCreatedUserError = (error) => {
  return {
    type: userActions.RECEIVE_CREATED_USER_ERROR,
    error,
  };
};

export const loginUser = (username, email) => {
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
    }),
  };
  return (dispatch) => {
    dispatch(requestLoginUser());
    return fetch(`/api/users/login`, config)
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveLoggedInUser(json));
      });
  };
};

export const requestLoginUser = () => {
  return {
    type: userActions.REQUEST_LOGIN_USER,
  };
};

export const receiveLoggedInUser = (user) => {
  return {
    type: userActions.RECEIVE_LOGGED_IN_USER,
    user,
  };
};

export const receiveLoggedInUserError = (error) => {
  return {
    type: userActions.RECEIVE_LOGGED_IN_USER_ERROR,
    error,
  };
};

export const loginUserAndGetTheirPosts = (username, email) => {
  return (dispatch, getState) => {
    return dispatch(loginUser(username, email)).then(() => {
      const loggedInUserId = getState().users.user.id;
      return dispatch(fetchTodos(loggedInUserId));
    });
  };
};

export const logoutUser = () => {
  return {
    type: userActions.LOGOUT_USER,
  };
};

export const requestLogin = (creds) => {
  return {
    type: userActions.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
};

export const receiveLogin = (user) => {
  return {
    type: userActions.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  };
};

export const loginError = (message) => {
  return {
    type: userActions.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
};
