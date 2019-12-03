
export default theme => ({
  userCard: {
    padding: "1vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    border: "1px solid",
    borderColor: theme.palette.primary.dark,
    borderRadius: '20px',
    margin: "0 auto"
  },
  user: {
    border: "1px solid red",
    padding: "2vh",
    borderRadius: "50%"
  },
  progressBar: {
    margin: '2vh auto',
    position: "relative",
    height: "3vh",
    width: "75vw",
    borderRadius: "50px",
    border: "1px solid",
    borderColor: theme.palette.textColor,
  },
  filler: {
    background: theme.palette.secondary.main,
    height: "100%",
    borderRadius: "inherit",
    transition: "width .2s ease-in"
  },
  trackers: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  tracker : {
    width: '30vw'
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  container: {
    backgroundColor: theme.palette.backgroundColor
  },
  textField: {
    outlineColor: theme.palette.textColor
  }
});
