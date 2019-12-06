import React, { Component } from "react";
import User from "./User";
import Tracker from "./Tracker";
import ProgressBar from "./ProgressBar";
import logo from "../../images/logo.png";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import happy from "../../images/happy.jpg";
import { connect } from "react-redux";
import request from "superagent";

class DashboardContainer extends Component {
  // state = { user: users[0] };

  componentDidMount() {
    request
      .get("https://radiant-ocean-32463.herokuapp.com/calendar")
      .then(res => {
        this.props.dispatch({
          type: "CALENDAR",
          payload: res.body
        });
      });
    request
      .get("https://radiant-ocean-32463.herokuapp.com/workout")
      .then(res => {
        this.props.dispatch({
          type: "WORKOUT_LIST",
          payload: res.body
        });
      });
    // this.props.history.push("/dashboard");
  }

  render() {
    const { classes } = this.props;
    console.log('PROPS FROM DASHBOARD CONTAINER', this.props)
    const user = this.props.user;
    const userName = `${user.firstName} ${user.lastName}`;
    const userDate =
      Math.ceil((Date.parse(user.startDate) - Date.now()) / 8.64e7) * -1;
    const userProgress = Math.floor((userDate * 100) / 90);
    const workout = () => {
      if (this.props.workouts.length) {
        return (
          <Link to={`video/${user.id}`}>
            <Button className={classes.startWorkoutBtn}>
              <FitnessCenterIcon />
              &emsp;Start your workout
            </Button>
          </Link>
        );
      } else {
        return (
          <Button className={classes.startWorkoutBtn}>
            <FitnessCenterIcon />
            &emsp;No workouts left Today!
          </Button>
        );
      }
    };
    return (
      <main>
        <div>
          <img src={logo} style={{ width: "100%" }} alt="logo" />
        </div>
        <User userImage={user.imageUrl} userName={userName}></User>
        <ProgressBar percentage={userProgress} />
        <div className={classes.trackers}>
          <Tracker icon="kcal" number="340 kcal" />
          <Tracker icon="time" number="3.5 hours" />
          <Tracker icon="completed" number="4 workouts" />
        </div>
        <div className={classes.lowerDashboard}>
          <Paper className={classes.streak}>
            <Typography
              variant="h6"
              color="primary"
              className={classes.streakTitle}
            >
              You are on a 4 day streak !
            </Typography>
            <img src={happy} className={classes.streakImg} alt="streak" />
          </Paper>
          <div className={classes.linkBtns}>
            <Link to={`calendar`}>
              <Button className={classes.calendarBtn}>
                <CalendarTodayIcon />
                Go to calendar
              </Button>
            </Link>
            {workout()}
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    calendar: state.calendar,
    user: state.user
  };
};

export default withStyles(styles)(connect(mapStateToProps)(DashboardContainer));
