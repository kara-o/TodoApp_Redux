import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    gridRow: "3/4",
    fontSize: "10px",
    width: "100vw",
    backgroundColor: "#565264",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    textAlign: "center",
    margin: "10px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.text}>My Simple Todo App © 2020</span>
    </div>
  );
};

export default Footer;
