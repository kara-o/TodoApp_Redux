import React, { useState } from "react";
import { connect } from "react-redux";
import { postTodo } from "../actions/todos";

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    user: users.user,
  };
};

const AddTodo = (props) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmitTodo = () => {
    setTodoText("");
    props.postTodo(todoText, props.user.id);
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <input type="submit" value="Add Todo" onClick={handleSubmitTodo} />
    </div>
  );
};

export default connect(mapStateToProps, { postTodo })(AddTodo); //using mapDispatchToProps in object form and passing object full of action creators, React-Redux automatically uses bindActionCreators
