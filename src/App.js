import React, { useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  useEffect(() => {
    callBackendAPI()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
    <div>
      <h1>My ToDo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
