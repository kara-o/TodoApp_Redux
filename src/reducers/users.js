import { userActions } from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  user: null,
  error: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case userActions.REQUEST_CREATE_USER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case userActions.RECEIVE_CREATED_USER: {
      return {
        ...state,
        isFetching: false,
        user: { id: action.id },
      };
    }
    case userActions.RECEIVE_CREATED_USER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case userActions.REQUEST_LOGIN_USER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case userActions.RECEIVE_LOGGED_IN_USER: {
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    }
    case userActions.RECEIVE_LOGGED_IN_USER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case userActions.LOGOUT_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
