const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { counter: state.counter + 1 };
    case "DEDUCT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
