import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import LoginUser from "./components/LoginUser";
import { loginUser } from "./actions/users";
import Loading from "./components/reusable/Loading";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    user: users.user,
    isFetching: users.isFetching,
  };
};

const App = (props) => {
  const { user, isFetching } = props;
  return (
    <div>
      {!isFetching ? (
        user ? (
          <>
            <h1>Welcome, {user.username}.</h1>
            <AddTodo />
            <TodoList />
          </>
        ) : (
          <LoginUser loginUser={loginUser} />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default connect(mapStateToProps, { loginUser })(App);
