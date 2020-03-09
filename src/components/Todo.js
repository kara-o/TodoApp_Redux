import React from 'react';
import { toggleTodo } from '../actions/actions';

import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(toggleTodo(ownProps.todo))
});

const Todo = props => {
  const { todo } = props;

  const handleToggle = () => {
    props.toggleTodo();
  };

  return (
    <li>
      {todo.text}
      <input type='checkbox' checked={todo.completed} onChange={handleToggle} />
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
