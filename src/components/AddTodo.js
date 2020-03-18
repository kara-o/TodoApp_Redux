import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postTodo } from '../actions/todos';

const AddTodo = props => {
  const [todoText, setTodoText] = useState('');

  const handleSubmitTodo = () => {
    setTodoText('');
    props.postTodo(todoText);
  };

  return (
    <div>
      <input
        type='text'
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <input type='submit' value='Add Todo' onClick={handleSubmitTodo} />
    </div>
  );
};

export default connect(null, { postTodo })(AddTodo); //using mapDispatchToProps in object form and passing object full of action creators, React-Redux automatically uses bindActionCreators
