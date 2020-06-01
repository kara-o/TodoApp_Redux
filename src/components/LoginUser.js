import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./reusable/UserForm";
import { loginUser } from "../actions/users";
import { connect } from "react-redux";

const LoginUser = (props) => {
  const handleSubmit = ({ username, email }) => {
    props.loginUser(username, email);
  };

  return (
    <>
      <UserForm onSubmit={handleSubmit} />
      <Link to="/signup">New User</Link>
    </>
  );
};

export default connect(null, { loginUser })(LoginUser);
