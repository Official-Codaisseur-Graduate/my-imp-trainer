import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Tracker = props => {
  const { classes } = props;

  return (
    <div className={classes.tracker}>
      <Paper style={{height:'15vh'}} className={classes.trackerContent}>
        <Typography variant="h6" color='primary'>
        {props.title}
        </Typography>
        <Typography component="p">
          <strong>{props.number}</strong>
        </Typography>
      </Paper>{" "}
    </div>
  );
};

export default withStyles(styles)(Tracker);
