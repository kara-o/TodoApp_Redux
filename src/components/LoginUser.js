import React, { useState } from 'react';

const LoginUser = ({ loginUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  return (
    <form onSubmit={() => loginUser(formData)}>
      Username:
      <input
        type='text'
        value={formData.username}
        onChange={e =>
          setFormData({
            ...formData,
            username: e.target.value
          })
        }
      />
      Email:
      <input
        type='text'
        value={formData.email}
        onChange={e =>
          setFormData({
            ...formData,
            email: e.target.value
          })
        }
      />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default LoginUser;
