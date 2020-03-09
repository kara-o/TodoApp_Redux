import React from 'react';
import { toggleTodo } from '../actions/actions';

import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(toggleTodo(ownProps.todo.id))
});

const Todo = props => {
  const { todo } = props;

  return (
    <li>
      {todo.text}
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={props.toggleTodo}
      />
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
