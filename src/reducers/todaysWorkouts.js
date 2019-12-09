const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "TODAY_WORKOUTS":
      return action.payload.calendar.find(day => day.day == action.payload.userDate).workouts;
    default:
      return state;
  }
};

export default reducer;
