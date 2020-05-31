import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import LoginUser from "./components/LoginUser";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
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
        const data = await response.json();
        console.log(data);
        setLoggedIn(data);
        return data;
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
