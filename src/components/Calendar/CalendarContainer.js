import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import WeekContainer from "./WeekContainer";
import { Link, CardContent } from "@material-ui/core";
import logo from "../../images/logo.png";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    margin: "0 auto",
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
    margin: "0 auto",
    textAlign: "center",
    marginBottom: -1,
    minHeight: 56,
    flexGrow: "0 !important",
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      flexGrow: 0
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

const mainFeaturedPost = {
  title: "Workout of the Day",
  image: "https://source.unsplash.com/featured/?{weightlifting}",
  imgText: "main image description",
  linkText: "Continue to today's workout."
};

const months = [
  {
    title: "Month 1",
    date: "19 workouts",
    image: "https://source.unsplash.com/featured/?{crossfit},{wod}",
    imageText: "Image Text"
  },
  {
    title: "Month 2",
    date: "21 workouts",
    image: "https://source.unsplash.com/featured/?{weightlifting}",
    imageText: "Image Text"
  },
  {
    title: "Month 3",
    date: "18 workouts",
    image: "https://source.unsplash.com/featured/?{calisthenics}",
    imageText: "Image Text"
  }
];

export default function CalendarContainer() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.logo}>
          <Link href="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <ExpansionPanel
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <CardContent>
                <Typography component="h2" variant="h5">
                  Month 1
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Amount of workouts
                </Typography>
                <Typography variant="subtitle1" paragraph></Typography>
                <Typography variant="subtitle1" color="primary">
                  Explore your schedule.
                </Typography>
              </CardContent>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <WeekContainer />
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
              <CardContent>
                <Typography component="h2" variant="h5">
                  Month 2
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Amount of workouts
                </Typography>
                <Typography variant="subtitle1" paragraph></Typography>
                <Typography variant="subtitle1" color="primary">
                  Explore your schedule.
                </Typography>
              </CardContent>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <WeekContainer />
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
              <CardContent>
                <Typography component="h2" variant="h5">
                  Month 3
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Amount of workouts
                </Typography>
                <Typography variant="subtitle1" paragraph></Typography>
                <Typography variant="subtitle1" color="primary">
                  Explore your schedule.
                </Typography>
              </CardContent>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <WeekContainer />
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          {/* <Grid container spacing={2}>
            {months.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}

          <Button
            className={classes.mainGrid}
            variant="contained"
            color="primary"
            href="dashboard"
          >
            BACK TO DASHBOARD
          </Button>
        </main>
      </Container>
    </React.Fragment>
  );
}
