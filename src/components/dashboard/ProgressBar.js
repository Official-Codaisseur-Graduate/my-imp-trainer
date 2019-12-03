import React from "react";
import ProgressBarFiller from "./ProgressBarFiller";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const ProgressBar = props => {
  const { classes } = props;

  return (
    <div>
    <div><FontAwesomeIcon icon={faTrophy} /> {props.percentage}%</div>
      

      <div className={classes.progressBar}>
        <ProgressBarFiller
          className={classes.progressBar}
          percentage={props.percentage}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(ProgressBar);
