const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL":
      return state;
    case "TODAY_WORKOUTS":
      return state.filter(workoutId => workoutId !== action.payload);
    default:
      return state;
  }
};

const initialState = [1, 3];

export default reducer;
