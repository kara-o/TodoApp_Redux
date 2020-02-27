import React from 'react';

const Todo = props => {
  const { todo } = props;

  return <li>{todo.text}</li>;
};

export default Todo;
