import React, { Component } from "react";
import User from "./User";
import Tracker from "./Tracker";
import ProgressBar from "./ProgressBar";
import logo from "../../images/logo.png";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { profiles, users } from "../../data.js";
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

class DashboardContainer extends Component {
  state = { profile: profiles[0], users: users };

  render() {
    const { classes } = this.props;
    console.log("STATE", this.state);
    const user = this.state.users.find(user=>user.id === this.state.profile.userId);
    const userName = `${user.firstName} ${user.lastName}`;
    return (
      <div>
        <div>
          <img src={logo} style={{ width: "50vh" }} alt="logo" />
        </div>
        <User userImage={this.state.profile.imageUrl} userName={userName}></User>
        <ProgressBar percentage={33} />
        <div className={classes.trackers}>
          <Tracker title="Calories burned this week" number="340" />
          <Tracker title="Hours spent working out this week" number="3.5" />
          <Tracker title="Workouts completed so far" number="4" />
        </div>
        <div className={classes.lowerDashboard}>
          <Paper className={classes.streak}>
            <Typography
              variant="h6"
              color="primary"
              style={{ height: "6vh", lineHeight: "8vh" }}
            >
              You are on a 4 day streak !
            </Typography>
          </Paper>
          <Link to={`calendar`}>
          <Button className={classes.calendarBtn}>
            <CalendarTodayIcon/>Go to calendar
          </Button>
          </Link>
        </div>
          <Link to={`video/${user.id}`}>
          <Button className={classes.startWorkoutBtn}>
            <FitnessCenterIcon/>&emsp;Start your workout
          </Button>
          </Link>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardContainer);
