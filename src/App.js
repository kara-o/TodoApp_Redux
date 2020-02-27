import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ListFilters from './components/ListFilters';

const App = () => {
  return (
    <div>
      <h1>My ToDo List</h1>
      <AddTodo />
      <TodoList />
      <ListFilters />
    </div>
  );
};

export default App;
