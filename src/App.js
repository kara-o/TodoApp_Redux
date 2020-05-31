import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import LoginUser from "./components/LoginUser";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const getTodos = async (id) => {
    try {
      const response = await fetch(`/api/todos?user_id=${id}`);
      if (response.ok) {
        const todos = await response.json();
        console.log("todos: ", todos);
        return todos;
      } else {
        throw new Error("There was an error getting the user's todos.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async ({ username, email }) => {
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
        }),
      };
      const response = await fetch(`/api/users/login`, config);
      if (response.ok) {
        const user = await response.json();
        console.log("user: ", user);

        const todos = await getTodos(user.id);

        setLoggedIn({ user, todos });
      } else {
        throw new Error("There was an error logging in.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <h1>Welcome, {loggedIn.username}.</h1>
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
