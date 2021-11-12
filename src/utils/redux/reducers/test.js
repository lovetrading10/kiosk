// Action
const TEST_ACTION = (payload) => {
  return { type: "TEST_ACTION", payload };
};

// Reducer
const testReducer = (state = [0], action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return [...state, 1];

    default:
      return state;
  }
};

export { TEST_ACTION, testReducer };
