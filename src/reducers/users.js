import { userActions } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case userActions.REQUEST_USERS: {
      return {
        ...state,
        isFetching: true
      };
    }
    case userActions.RECEIVE_USERS: {
      return {
        ...state,
        isFetching: false,
        items: action.users
      };
    }
    case userActions.RECEIVE_USERS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case userActions.REQUEST_CREATE_USER: {
      return {
        ...state,
        isFetching: true
      };
    }
    case userActions.RECEIVE_CREATED_USER: {
      return {
        ...state,
        isFetching: false,
        items: [...state.items, { id: action.id }]
      };
    }
    case userActions.RECEIVE_CREATED_USER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default:
      return state;
  }
};
