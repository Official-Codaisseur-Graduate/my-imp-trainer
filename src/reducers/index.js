import { combineReducers } from "redux";
import todaysWorkouts from "./todaysWorkouts";
import workout from "./workout";
import user from "./user";
import calendar from "./calendar";
import workoutList from "./workoutList";

export default combineReducers({
  todaysWorkouts,
  workout,
  user,
  calendar,
  workoutList
});
