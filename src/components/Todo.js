import React from 'react';
import { toggleTodo } from '../actions/actions';

import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(toggleTodo(ownProps.todo))
});

const Todo = props => {
  const { todo } = props;

  const toggle = async () => {
    try {
      const config = {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          completed: !todo.completed
        })
      };
      const response = await fetch(`/api/todos/${todo.id}/toggle`, config);
      if (response.ok) {
        return response.json({ message: 'Successfully toggled!' });
      } else {
        throw new Error('There was an error toggling');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    toggle().then(props.toggleTodo());
  };

  const capitalizedFirstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <li>
      {capitalizedFirstLetter(todo.text)}
      <input type='checkbox' checked={todo.completed} onChange={handleToggle} />
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
