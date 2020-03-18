import { todoActions } from '../actions/actionTypes';

const { SELECT_FILTER } = todoActions;

export const filter = (state = 'all', action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter;
    default:
      return state;
  }
};
