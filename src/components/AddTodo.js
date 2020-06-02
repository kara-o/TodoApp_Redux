import React, { useState } from "react";
import { connect } from "react-redux";
import { postTodo } from "../actions/todos";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  outerContainer: {
    padding: "20px 20px 0 20px",
  },
  input: {
    marginRigh: "10px",
    padding: "5px",
  },
  button: {
    marginLeft: "10px",
  },
});

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    user: users.user,
  };
};

const AddTodo = (props) => {
  const [todoText, setTodoText] = useState("");
  const classes = useStyles();

  const handleSubmitTodo = () => {
    setTodoText("");
    props.postTodo(todoText, props.user.id);
  };

  return (
    <div className={classes.outerContainer}>
      <input
        className={classes.input}
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className={classes.button} onClick={handleSubmitTodo}>
        Add
      </button>
    </div>
  );
};

export default connect(mapStateToProps, { postTodo })(AddTodo); //using mapDispatchToProps in object form and passing object full of action creators, React-Redux automatically uses bindActionCreators
