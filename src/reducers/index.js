import { combineReducers } from 'redux';
import { todos } from './todos';
import { filter } from './filter';
import { users } from './users';

export default combineReducers({ todos, filter, users });
