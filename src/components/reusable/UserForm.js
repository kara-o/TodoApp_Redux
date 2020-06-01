import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  return (
    <form
      onSubmit={(e) => {
        console.log("submit!");
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      Username:
      <input
        type="text"
        value={formData.username}
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />
      Email:
      <input
        type="text"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
