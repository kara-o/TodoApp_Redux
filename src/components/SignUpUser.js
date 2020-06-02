import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postUser } from "../actions/users";
import UserForm from "./reusable/UserForm";
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

const SignUpUser = (props) => {
  const classes = useStyles();
  const handleSubmit = ({ username, email }) => {
    props.postUser(username, email);
  };

  return (
    <div className={classes.container}>
      <h1>Sign Up</h1>
      <UserForm onSubmit={handleSubmit} />
      <Link className={classes.link} onClick={props.handleLinkClick} to="/">
        Back to Login
      </Link>
    </div>
  );
};

export default connect(null, { postUser })(SignUpUser);
