import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postUser } from '../actions/users';
import UserForm from './reusable/UserForm';

const SignUpUser = props => {
  const handleSubmit = ({ username, email }) => {
    props.postUser(username, email);
  };

  return (
    <>
      <UserForm onSubmit={handleSubmit} />
      <Link to='/'>Back to Login</Link>
    </>
  );
};

export default connect(null, { postUser })(SignUpUser);
