import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import LoginUser from "./components/LoginUser";
import SignUpUser from "./components/SignUpUser";
import Loading from "./components/reusable/Loading";
import { Footer, Navbar } from "./components/layout";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "*": {
      boxSizing: "border-box",
      fontFamily: "Noto Sans, sans-serif",
    },
    body: {
      margin: "0px",
      overflowX: "hidden",
    },
    "#root": {
      maxWidth: "1500px",
      marginLeft: "auto",
      marginRight: "auto",
      minHeight: "100vh",
      display: "grid",
      gridTemplateRows: "50px 1fr 100px",
      gridTemplateColumns: "1fr",
      justifyItems: "center",
    },
    button: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    a: {
      color: "#565264",
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
        fontWeight: "bold",
      },
    },
  },
  mainContainer: {
    gridRow: "2/3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    width: "300px",
  },
});

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    user: users.user,
    isFetching: users.isFetching,
  };
};

const App = (props) => {
  const { user, isFetching } = props;
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const classes = useStyles();

  return (
    <>
      {user ? <Navbar /> : null}
      <div className={classes.mainContainer}>
        {!isFetching ? (
          user ? (
            <>
              <h1>Welcome, {user.username}.</h1>
              <div className={classes.buttonsContainer}>
                <button
                  onClick={() => {
                    setShowAdd(!showAdd);
                    setShowDelete(false);
                  }}
                >
                  Add Todo
                </button>
                <button
                  onClick={() => {
                    setShowDelete(!showDelete);
                    setShowAdd(false);
                  }}
                >
                  Remove Todos
                </button>
              </div>
              {showAdd ? <AddTodo /> : null}
              <TodoList showDelete={showDelete} />
            </>
          ) : !showSignUp ? (
            <LoginUser handleLinkClick={() => setShowSignUp(true)} />
          ) : (
            <SignUpUser handleLinkClick={() => setShowSignUp(false)} />
          )
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </>
  );
};

export default connect(mapStateToProps)(App);
