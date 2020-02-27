import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todosById: todos.todosById,
    orderedIds: todos.orderedIds
  };
};

const TodoList = props => {
  const { todosById, orderedIds } = props;

  const displayTodos = () => {
    return orderedIds.map(id => {
      return <Todo key={id} todo={todosById[id]} />;
    });
  };

  return (
    <>
      <ul>{displayTodos()}</ul>
    </>
  );
};

export default connect(mapStateToProps)(TodoList);
