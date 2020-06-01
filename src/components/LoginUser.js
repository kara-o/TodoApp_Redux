import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./reusable/UserForm";
import { loginUserAndGetTheirPosts } from "../actions/users";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    user: users.user,
    isFetching: users.isFetching,
  };
};

const LoginUser = (props) => {
  const handleSubmit = ({ username, email }) => {
    props.loginUserAndGetTheirPosts(username, email);
  };

  return (
    <>
      <UserForm onSubmit={handleSubmit} />
      <Link to="/signup">New User</Link>
    </>
  );
};

export default connect(mapStateToProps, { loginUserAndGetTheirPosts })(
  LoginUser
);
