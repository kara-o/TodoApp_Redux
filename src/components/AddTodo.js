import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const AddTodo = props => {
  const [todoText, setTodoText] = useState('');

  const handleSubmitTodo = () => {
    props.addTodo(todoText);
    setTodoText('');
    createTodo()
  };

  const createTodo = async () => {
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: todoText
        })
      };
      const response = await fetch('/api/todos', config);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.log(error)
    }
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
