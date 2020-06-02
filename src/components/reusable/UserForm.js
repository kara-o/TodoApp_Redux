import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: "10px",
    padding: "10px",
  },
});

const UserForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  return (
    <form
      className={classes.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <input
        className={classes.input}
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />
      <input
        className={classes.input}
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />
      <input className={classes.input} type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
