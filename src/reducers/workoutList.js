
const reducer = (state = "", action = {}) => {
  switch (action.type) {
    case "WORKOUT_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
