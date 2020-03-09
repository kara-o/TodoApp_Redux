import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <h1>My ToDo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
