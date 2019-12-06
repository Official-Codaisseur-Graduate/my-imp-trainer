
const reducer = (state = "", action = {}) => {
  switch (action.type) {
    case "CALENDAR":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
