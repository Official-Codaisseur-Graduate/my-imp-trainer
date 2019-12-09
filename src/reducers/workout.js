// import { workouts } from "../data.js";

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "WORKOUT":
      return action.payload.workoutList.find(
        workout => workout.id == action.payload.trainingId
      );
    // return workouts.find(workout => workout.id == action.payload);
    default:
      return state;
  }
};

export default reducer;
