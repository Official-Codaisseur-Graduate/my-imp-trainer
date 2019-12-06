import { workouts } from "../data.js";

const reducer = (state = workouts, action = {}) => {
  switch (action.type) {
    case "WORKOUT":
      console.log("reducer ", state, action);
      if (state.length > 1) {
        console.log(
          "this ia a hack",
          state.find(workout => workout.id == action.payload)
        );
        return state.find(workout => workout.id == action.payload);
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
