import React from "react";
import { toggleTodo, deleteTodo } from "../actions/todos";
import { createUseStyles } from "react-jss";

import { connect } from "react-redux";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#C9C5CB",
    },
  },
  complete: {
    textDecoration: "line-through",
  },
  incomplete: {
    textDecoration: "none",
  },
  deleteBtn: {
    height: "25%",
    margin: "10px",
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  //TODO move to async Redux thunk actions
  toggleTodo: () => dispatch(toggleTodo(ownProps.todo)),
  deleteTodo: () => dispatch(deleteTodo(ownProps.todo.id)),
});

const Todo = (props) => {
  const { todo, showDelete } = props;
  const classes = useStyles();

  const toggle = async () => {
    //TODO change to be async redux call
    try {
      const config = {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      };
      const response = await fetch(`/api/todos/${todo.id}/toggle`, config);
      if (response.ok) {
        return response.json({ message: "Successfully toggled!" });
      } else {
        throw new Error("There was an error toggling");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    toggle().then(props.toggleTodo());
  };

  const capitalizedFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <li
      className={
        !showDelete
          ? classes.hover + " " + classes.container
          : classes.container
      }
      onClick={!showDelete ? handleToggle : null}
    >
      <p
        className={
          (todo.completed ? classes.complete : classes.incomplete) +
          " " +
          classes.text
        }
      >
        {capitalizedFirstLetter(todo.text)}
      </p>
      {showDelete ? (
        <button
          onClick={() => props.deleteTodo()}
          className={classes.deleteBtn}
        >
          X
        </button>
      ) : null}
    </li>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
