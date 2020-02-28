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
    if (orderedIds.length > 0) {
      return orderedIds.map(id => {
        return <Todo key={id} todo={todosById[id]} todoId={id} />;
      });
    } else return <p>Yay, nothing to do!</p>;
  };

  return (
    <>
      <ul>{displayTodos()}</ul>
    </>
  );
};

export default connect(mapStateToProps)(TodoList);
