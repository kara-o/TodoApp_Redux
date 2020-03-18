import { userActions } from './actionTypes';

export const postUser = (username, email) => {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email
    })
  };
  return dispatch => {
    dispatch(requestCreateUser());
    return fetch(`/api/users`, config).then(res =>
      res.json().then(json => {
        dispatch(receiveCreatedUser(json, text));
      })
    );
  };
};

export const requestCreateUser = () => {
  return {
    type: userActions.REQUEST_CREATE_USER
  };
};

export const receiveCreatedUser = id => {
  return {
    type: userActions.RECEIVE_CREATED_USER,
    id
  };
};

export const receiveCreatedUserError = error => {
  return {
    type: userActions.RECEIVE_CREATED_USER_ERROR,
    error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(requestUsers());
    return fetch(`/api/users`)
      .then(res => res.json())
      .then(json => {
        dispatch(receiveUsers(json));
      });
  };
};

export const requestUsers = () => {
  return {
    type: userActions.REQUEST_USERS
  };
};

export const receiveUsers = json => {
  return {
    type: userActions.RECEIVE_USERS,
    users: json
  };
};

export const receiveUsersError = error => {
  return {
    type: userActions.RECEIVE_USERS_ERROR,
    error
  };
};
