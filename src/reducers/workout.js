
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "WORKOUT":
      return action.payload.workoutList.find(
        workout => workout.id == action.payload.trainingId
      );
    default:
      return state;
  }
};

export default reducer;
