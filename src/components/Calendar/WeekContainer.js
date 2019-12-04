import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Day from "./Day";
import List from "@material-ui/core/List";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    flexGrow: 0,
    width: "290px",
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      flexGrow: 0,
      width: "290px"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  logo: {
    width: "100%",
    marginRight: "0",
    marginBottom: "2%",
    marginTop: "1%",

    "& img": {
      width: "80%",
      marginRight: "0",
      marginBottom: "2%",
      marginTop: "1%"
    }
  }
}));

const days = [
  {
    id: 1,
    day: "Day 1",
    image: "https://source.unsplash.com/featured/?{weightlifting}",
    workouts: [1, 2],
    required: true,
    category: 1
  },
  {
    id: 2,
    day: "Day 2",
    image: "https://source.unsplash.com/featured/?{gym}",
    workouts: [2, 3],
    required: true,
    category: 1
  },
  {
    id: 3,
    day: "Day 3",
    image: "https://source.unsplash.com/featured/?{crossfit}",
    workouts: [3, 1],
    required: true,
    category: 1
  },
  {
    id: 4,
    day: "Day 4",
    image: "https://source.unsplash.com/featured/?{fitness}",
    workouts: [1, 3, 1],
    required: true,
    category: 1
  },
  {
    id: 5,
    day: "Day 5",
    image: "https://source.unsplash.com/featured/?{sports}",
    workouts: [1, 4],
    required: false,
    category: 1
  },
  {
    id: 6,
    day: "Day 6",
    image: "https://source.unsplash.com/featured/?{coding}",
    workouts: [1, 5],
    required: true,
    category: 1
  },
  {
    id: 7,
    day: "Day 7",
    image: "https://source.unsplash.com/featured/?{avatar}",
    workouts: [],
    required: true,
    category: 1
  }
];

export default function WeekContainer() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <ExpansionPanel
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Week 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {/* <Grid container spacing={2}> */}
                <List className={classes.root}>
                  {days.map(day => (
                    <Day key={day.id} day={day} />
                  ))}
                </List>
                {/* </Grid> */}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <ExpansionPanelSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Week 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <List className={classes.root}>
                  {days.map(day => (
                    <Day key={day.id} day={day} />
                  ))}
                </List>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            square
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <ExpansionPanelSummary
              aria-controls="pane3d-content"
              id="panel3d-header"
            >
              <Typography>Week 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <List className={classes.root}>
                  {days.map(day => (
                    <Day key={day.id} day={day} />
                  ))}
                </List>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            square
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <ExpansionPanelSummary
              aria-controls="pane3d-content"
              id="panel3d-header"
            >
              <Typography>Week 4</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <List className={classes.root}>
                  {days.map(day => (
                    <Day key={day.id} day={day} />
                  ))}
                </List>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </main>
      </Container>
    </React.Fragment>
  );
}
