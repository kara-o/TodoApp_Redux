import React from 'react';
import Todo from './Todo';
import { fetchTodos } from '../actions/todos';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { todos } = state;
  return {
    items: todos.items,
    isFetching: todos.isFetching
  };
};

const TodoList = props => {
  const { items, isFetching } = props;

  const displayTodos = () => {
    if (items.length > 0) {
      return items.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      });
    } else return null;
  };

  const loading = () => {
    return <p>Loading...</p>;
  };

  return <>{isFetching ? loading() : <ul>{displayTodos()}</ul>}</>;
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
