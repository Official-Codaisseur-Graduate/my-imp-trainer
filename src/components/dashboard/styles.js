export default theme => ({
  userCard: {
    marginTop: '2vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    margin: "0 auto"
  },
  userImage: { 
    border: "3px solid",
    borderColor: theme.palette.primary.dark,
    width: '20vw',
    height: '20vw'
  },
  progressBar: {
    margin: "2vh auto",
    position: "relative",
    height: "2vh",
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
    marginTop: "2vh",
    width: "30vw",
  },
  trackerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  progressPercentage: {
    marginLeft: "13vw",
    marginTop: "3vh",
    display: "flex",
    justifyContent: "flex-start"
  },
  calendarBtn: {
    height: "17vh",
    width: "17vh",
    background: theme.palette.primary.main,
    color: theme.palette.textColor
  },
  startWorkoutBtn: {
    height: "12vh",
    width: "80vw",
    marginTop: '4vh',
    background: theme.palette.secondary.main,
    color: theme.palette.textColor
  },
  streak: {
    height: "17vh",
    width: "17vh",
    background: theme.palette.textColor,
    color: theme.palette.primary.main,
  },
  lowerDashboard: { 
    marginTop: '5vh',
    display: "flex", 
    flexDirection: "row",
    justifyContent: 'space-around' }
});
