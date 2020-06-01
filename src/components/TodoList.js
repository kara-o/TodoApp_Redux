import React from "react";
import Todo from "./Todo";
import Loading from "./reusable/Loading";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log("state in TodoList: ", state);
  const { todos } = state;
  return {
    items: todos.items,
    isFetching: todos.isFetching,
  };
};

const TodoList = (props) => {
  const { items, isFetching } = props;

  const displayTodos = () => {
    if (items.length > 0) {
      return items.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      });
    } else return null;
  };

  return <>{isFetching ? <Loading /> : <ul>{displayTodos()}</ul>}</>;
};

export default connect(mapStateToProps)(TodoList);
