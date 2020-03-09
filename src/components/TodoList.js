import React, { useEffect } from 'react';
import Todo from './Todo';
import { setTodos } from '../actions/actions';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todosById: todos.todosById,
    orderedIds: todos.orderedIds,
    allTodos: todos.allTodos
  };
};

const TodoList = props => {
  const { allTodos } = props;

  const getTodos = async () => {
    try {
      const response = await fetch('/api/todos');
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('There was an error fetching all todos');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos().then(res => {
      props.setTodos(res);
    });
  }, []);

  const displayTodos = () => {
    if (allTodos.length > 0) {
      return allTodos.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      });
    } else return null;
  };

  return (
    <>
      <ul>{displayTodos()}</ul>
    </>
  );
};

export default connect(mapStateToProps, { setTodos })(TodoList);
