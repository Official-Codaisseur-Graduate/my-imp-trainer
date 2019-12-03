export default theme => ({
  userCard: {
    padding: "1vh",
    marginTop: '2vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    border: "1px solid",
    borderColor: theme.palette.primary.dark,
    borderRadius: "20px",
    margin: "0 auto"
  },
  user: {
    border: "1px solid red",
    padding: "2vh",
    borderRadius: "50%",
    marginBottom: '2vh'
  },
  progressBar: {
    margin: "2vh auto",
    position: "relative",
    height: "3vh",
    width: "75vw",
    borderRadius: "50px",
    border: "1px solid",
    borderColor: theme.palette.textColor
  },
  filler: {
    background: theme.palette.secondary.main,
    height: "100%",
    borderRadius: "inherit",
    transition: "width .2s ease-in"
  },
  trackers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tracker: {
    marginTop: "5vh",
    width: "30vw",
  },
  progressPercentage: {
    marginLeft: "13vw",
    marginTop: "3vh",
    display: "flex",
    justifyContent: "flex-start"
  },
  startWorkoutBtn: {
    height: "20vh",
    width: "20vh",
    background: theme.palette.primary.main,
    color: theme.palette.textColor
  },
  streak: {
    height: "20vh",
    width: "20vh",
    lineHeight: '20vh',
    background: theme.palette.textColor,
    color: theme.palette.primary.main,
    verticalAlign: 'middle',
  },
  lowerDashboard: { 
    marginTop: '5vh',
    display: "flex", 
    flexDirection: "row",
    justifyContent: 'space-around' }
});
