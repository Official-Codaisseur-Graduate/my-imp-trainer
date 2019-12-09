import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import WeekContainer from './WeekContainer';
import { CardContent } from '@material-ui/core';
import logo from '../../images/logo.png';
import { Link as Route } from 'react-router-dom';
import { connect } from 'react-redux';

const ExpansionPanel = withStyles({
  root: {
    borderRadius: 4,
    margin: '10px auto',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    margin: '0 auto',
    textAlign: 'center',
    marginBottom: -1,
    minHeight: 56,
    flexGrow: '0 !important',
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '6px 0',
      flexGrow: 0
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: '22px 0px 0px 0px'
  }
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  logo: {
    width: '100%',
    marginRight: '0',
    marginBottom: '2%',
    marginTop: '1%',

    '& img': {
      width: '80%',
      marginRight: '0',
      marginBottom: '2%',
      marginTop: '1%'
    }
  }
}));

const mainFeaturedPost = {
  title: 'Workout of the Day',
  image: 'https://source.unsplash.com/featured/?{weightlifting}',
  imgText: 'workout image description',
  linkText: "Continue to today's workout."
};

const CalendarContainer = (props) => {
  const classes = useStyles();
  const calendar = props.calendar;
  const workoutList = props.workoutList;

  const amountOfWorkouts = calendar
    .map((object) => {
      return object.workouts.length;
    })
    .reduce((total, workout) => total + workout, 0);

  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <div className={classes.logo}>
          <Route to={'/'}>
            <img src={logo} alt='' />
          </Route>
        </div>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary aria-controls='panel1d-content' id='panel1d-header'>
              <CardContent>
                <Typography component='h2' variant='h5'>
                  Month 1
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  {amountOfWorkouts} workouts
                </Typography>
              </CardContent>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {/* <Typography> */}
              <WeekContainer calendar={props.calendar} workoutList={props.workoutList} />
              {/* </Typography> */}
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary aria-controls='panel2d-content' id='panel2d-header'>
              <CardContent>
                <Typography component='h2' variant='h5'>
                  Month 2
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  {amountOfWorkouts} workouts
                </Typography>
              </CardContent>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {/* <Typography> */}
              <WeekContainer calendar={props.calendar} workoutList={props.workoutList} />
              {/* </Typography> */}
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary aria-controls='pane3d-content' id='panel3d-header'>
              <CardContent>
                <Typography component='h2' variant='h5'>
                  Month 3
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  {amountOfWorkouts} workouts
                </Typography>
              </CardContent>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {/* <Typography> */}
              <WeekContainer calendar={props.calendar} workoutList={props.workoutList} />
              {/* </Typography> */}
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Route to={'/dashboard'}>
            <Button className={classes.mainGrid} variant='contained' color='primary'>
              BACK TO DASHBOARD
            </Button>
          </Route>
        </main>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    workoutList: state.workoutList,
    calendar: state.calendar
  };
};

export default connect(mapStateToProps)(CalendarContainer);
