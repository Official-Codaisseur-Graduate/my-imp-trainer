import { workouts } from "../../data.js";

const reducer = (state = workouts, action = {}) => {
  switch (action.type) {
    case "WORKOUT":
      return state.find(workout => workout.id === action.payload);
    default:
      return state;
  }
};

export default reducer;
