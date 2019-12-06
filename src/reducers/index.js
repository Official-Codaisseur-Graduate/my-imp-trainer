import { combineReducers } from "redux";
import workouts from "./workouts";
import workout from "./workout";
import user from "./user";
import calendar from "./calendar";
import workoutList from "./workoutList";

export default combineReducers({
  workouts,
  workout,
  user,
  calendar,
  workoutList
});
