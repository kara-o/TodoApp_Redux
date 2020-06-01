import React, { useState } from "react";
import Todo from "./Todo";
import Loading from "./reusable/Loading";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { todos } = state;
  return {
    items: todos.items,
    isFetching: todos.isFetching,
  };
};

const TodoList = (props) => {
  const { items, isFetching, showDelete } = props;

  const displayTodos = () => {
    if (items.length > 0) {
      return items.map((todo) => {
        return (
          <Todo
            showDelete={showDelete}
            key={todo.id}
            name={todo.id}
            todo={todo}
          />
        );
      });
    } else return null;
  };

  return <div>{isFetching ? <Loading /> : <ul>{displayTodos()}</ul>}</div>;
};

export default connect(mapStateToProps)(TodoList);
