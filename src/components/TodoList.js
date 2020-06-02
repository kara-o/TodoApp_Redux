import React, { useState } from "react";
import Todo from "./Todo";
import Loading from "./reusable/Loading";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  listContainer: {
    boxShadow: "5px 10px 18px #888888",
    padding: "10px",
    width: "400px",
    padding: "0",
    margin: "20px 0 20px 0",
  },
});

const mapStateToProps = (state) => {
  const { todos } = state;
  return {
    items: todos.items,
    isFetching: todos.isFetching,
  };
};

const TodoList = (props) => {
  const { items, isFetching, showDelete } = props;
  const classes = useStyles();

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

  return (
    <div>
      {isFetching ? (
        <Loading />
      ) : (
        <ul className={classes.listContainer}>{displayTodos()}</ul>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(TodoList);
