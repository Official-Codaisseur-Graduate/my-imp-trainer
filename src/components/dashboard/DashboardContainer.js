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

class DashboardContainer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <img src={logo} style={{ width: "50vh" }} alt="logo" />
        </div>
        <User></User>
        <ProgressBar percentage={33} />
        <div className={classes.trackers}>
          <Tracker title="Calories burned this week" number="340" />
          <Tracker title="Hours spent working out this week" number="3.5" />
          <Tracker title="Workouts completed so far" number="4" />
        </div>
        <div className={classes.lowerDashboard}>
            <Paper className={classes.streak}>
              <Typography variant="h5" color="primary" style={{height:'6vh', lineHeight:'6vh'}}>
                You are on a 4 day streak !
              </Typography>
            </Paper>
            <Button className={classes.startWorkoutBtn}>
              Start your workout
            </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardContainer);
