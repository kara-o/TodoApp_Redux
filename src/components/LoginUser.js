import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./reusable/UserForm";
import { loginUserAndGetTheirPosts } from "../actions/users";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    margin: "10px",
  },
});

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
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <UserForm onSubmit={handleSubmit} />
      <Link className={classes.link} onClick={props.handleLinkClick} to="/">
        New User?
      </Link>
    </div>
  );
};

export default connect(mapStateToProps, { loginUserAndGetTheirPosts })(
  LoginUser
);
