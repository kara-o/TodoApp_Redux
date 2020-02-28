import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const AddTodo = props => {
  const [todoText, setTodoText] = useState('');

  const handleSubmitTodo = e => {
    console.log('here in submit', todoText);
    e.preventDefault();
    props.addTodo(todoText);
    setTodoText('');
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

const mapDispatchToProps = {
  addTodo
};

export default connect(null, { addTodo })(AddTodo); //using mapDispatchToProps in object form and passing object full of action creators, React-Redux automatically uses bindActionCreators
