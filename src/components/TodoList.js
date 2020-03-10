import React, { useEffect } from 'react';
import Todo from './Todo';
import { fetchTodos } from '../actions/actions';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { todos } = state;
  return {
    items: todos.items
  };
};

const TodoList = props => {
  const { items } = props;

  // const getTodos = async () => {
  //   try {
  //     const response = await fetch('/api/todos');
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error('There was an error fetching all todos');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   props.fetchTodos();
  // }, []);

  const displayTodos = () => {
    if (items.length > 0) {
      return items.map(todo => {
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

export default connect(mapStateToProps, { fetchTodos })(TodoList);
