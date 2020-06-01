export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return {
        user: undefined,
        items: [],
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      user: undefined,
      items: [],
    };
  }
};

export const saveState = (state) => {
  console.log("state: ", state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("Error: ", err);
  }
};
