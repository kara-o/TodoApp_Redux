import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import LoginUser from './components/LoginUser';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  const loginUser = ({ username, email }) => {
    setLoggedIn(username);
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <h1>Welcome back, {loggedIn}.</h1>
          <AddTodo />
          <TodoList />
        </>
      ) : (
        <LoginUser loginUser={loginUser} />
      )}
    </div>
  );
};

export default App;
