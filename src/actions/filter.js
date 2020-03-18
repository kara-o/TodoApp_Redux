import { filterActions } from './actionTypes';

export const selectFilter = filter => {
  return {
    type: filterActions.SELECT_FILTER,
    filter
  };
};
