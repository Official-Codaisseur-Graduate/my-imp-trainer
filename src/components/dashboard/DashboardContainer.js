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
import { url } from "../../constants";

class DashboardContainer extends Component {
  async componentDidMount() {
    const user = await request
      .get(`${url}/user/1`)
      .then(res => res.body);
    const userDate =
      Math.ceil((Date.parse(user.startDate) - Date.now()) / 8.64e7) * -1;
    request
      .get(`${url}/calendar`)
      .then(res => {
        this.props.dispatch({
          type: "CALENDAR",
          payload: res.body
        });
        this.props.dispatch({
          type: "TODAY_WORKOUTS",
          payload: { calendar: res.body, userDate: userDate }
        });
      });
    request
      .get(`${url}/workout`)
      .then(res => {
        this.props.dispatch({
          type: "WORKOUT_LIST",
          payload: res.body
        });
      });
  }

  render() {
    const { classes } = this.props;
    const user = this.props.user;
    const userName = `${user.firstName} ${user.lastName}`;
    const userDate =
      Math.ceil((Date.parse(user.startDate) - Date.now()) / 8.64e7) * -1;
    //Calculating progress for a 90 day program
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
        <User userImage={user.picture} userName={userName}></User>
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
    workouts: state.todaysWorkouts,
    calendar: state.calendar,
    user: state.user
  };
};

export default withStyles(styles)(connect(mapStateToProps)(DashboardContainer));
