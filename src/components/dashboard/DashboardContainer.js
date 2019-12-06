import React, { Component } from 'react';
import User from './User';
import Tracker from './Tracker';
import ProgressBar from './ProgressBar';
import logo from '../../images/logo.png';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { profiles, users } from '../../data.js';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import happy from '../../images/happy.jpg';

class DashboardContainer extends Component {
  state = { profile: profiles[0], users: users };

  render() {
    const { classes } = this.props;
    console.log('STATE', this.state);
    const user = this.state.users.find((user) => user.id === this.state.profile.userId);
    const userName = `${user.firstName} ${user.lastName}`;
    return (
      <div>
        <div>
          <img src={logo} style={{ width: '50vh' }} alt='logo' />
        </div>
        <User userImage={this.state.profile.imageUrl} userName={userName}></User>
        <ProgressBar percentage={33} />
        <div className={classes.trackers}>
          <Tracker icon='kcal' number='340 kcal' />
          <Tracker icon='time' number='3.5 hours' />
          <Tracker icon='completed' number='4 workouts' />
        </div>
        <div className={classes.lowerDashboard}>
          <Paper className={classes.streak}>
            <Typography
              variant='h6'
              color='primary'
              style={{ marginTop: '2vh', lineHeight: '6vh' }}
            >
              You are on a 4 day streak !
            </Typography>
            <img src={happy} className={classes.streakImg} alt='happy' />
          </Paper>
          <div className={classes.linkBtns}>
            <Link to={`calendar`}>
              <Button className={classes.calendarBtn}>
                <CalendarTodayIcon />
                Go to calendar
              </Button>
            </Link>
            <Link to={`video/${user.id}`}>
              <Button className={classes.startWorkoutBtn}>
                <FitnessCenterIcon />
                &emsp;Start your workout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardContainer);
