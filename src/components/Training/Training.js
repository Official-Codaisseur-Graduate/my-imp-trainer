import React from "react";
import {
  CssBaseline,
  Paper,
  Grid,
  Box,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Container from "@material-ui/core/Container";
import logo from "../../images/logo.png";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Trophy from "../Trophy/Trophy";
import { connect } from "react-redux";

class Training extends React.Component {
  state = { trophy: false, achievement: "" };

  componentDidMount() {
    if (this.props.match.params.trainingId)
      this.props.dispatch({
        type: "WORKOUT",
        payload: {
          workoutList: this.props.workoutList,
          trainingId: this.props.match.params.trainingId
        }
      });
  }

  finishWorkout = () => {
    this.setState({
      trophy: true,
      achievement: "workout"
    });
  };

  render() {
    const { classes } = this.props;
    if (this.state.trophy) {
      return <Trophy achievement={this.state.achievement} />;
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <div className={classes.logo}>
              <img src={logo} alt="IMP Trainer" />
            </div>
            <Typography
              className={classes.title}
              component="h1"
              variant="h5"
              color="primary"
            >
              {this.props.workout.title}
            </Typography>
            <video
              className={classes.video}
              controls
              autoPlay
              src={this.props.workout.videoUrl}
            />
            <Typography className={classes.title} component="p">
              {this.props.workout.description}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Kcal</p>
                  <p>{this.props.workout.calories}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Time</p>
                  <p>{this.props.workout.totalTime * 0.0001}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Level</p>
                  <p>{this.props.workout.difficulty}</p>
                </Paper>
              </Grid>
            </Grid>
            <Grid style={{ height: "20px", width: "100%" }}></Grid>
            <Grid container>
              <Grid item xs>
                <Link to="/dashboard" variant="body2">
                  <ArrowLeft className={classes.arrow} /> Dashboard
                </Link>
              </Grid>
              <Grid item xs>
                <Link to="/calendar" variant="body2">
                  My calendar <ArrowRight className={classes.arrow} />
                </Link>
              </Grid>
            </Grid>
          </div>
          <Box mt={8}></Box>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    workout: state.workout,
    workoutList: state.workoutList
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Training));
