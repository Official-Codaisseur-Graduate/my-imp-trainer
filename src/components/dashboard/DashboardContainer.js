import React, { Component } from "react";
import User from "./User";
import Tracker from "./Tracker";
import ProgressBar from "./ProgressBar";
import logo from "../../images/logo.png";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/styles";

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
          <Tracker title="Calories burned this week" number="340" />
          <Tracker title="Calories burned this week" number="340" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardContainer);
