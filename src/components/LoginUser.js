import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from './reusable/UserForm';

const LoginUser = ({ loginUser }) => {
  return (
    <>
      <UserForm onSubmit={loginUser} />
      <Link to='/signup'>New User</Link>
    </>
  );
};

export default LoginUser;
