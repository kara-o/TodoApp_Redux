import { combineReducers } from 'redux';
import { todos } from './todos';
import listFilter from './listFilter';

export default combineReducers({ todos });
