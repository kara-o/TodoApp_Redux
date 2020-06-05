import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/users";

const useStyles = createUseStyles({
  container: {
    gridRow: "1/2",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  link: {
    padding: "10px",
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button onClick={() => props.handleLogout({})} type="button">
        Log out
      </button>
      {/* <Link className={classes.link} onClick={props.logoutUser} to="/">
        Logout
      </Link> */}
    </div>
  );
};

export default connect(null, { logoutUser })(Navbar);
