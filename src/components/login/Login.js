import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import logo from "../../images/logo.png";
import request from "superagent";
import { connect } from "react-redux";
import { url } from "../../constants";

class Login extends Component {
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    //Dev mode, always fetching first user in DB for now
    event.preventDefault();
    request
      .get(`${url}/user/1`)
      .then(res => {
        this.props.dispatch({
          type: "USER",
          payload: res.body
        });
      });
    this.props.history.push("/dashboard");

  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <div className={classes.logo}>
              <img src={logo} alt="" />
            </div>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextField
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChange}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                margin="normal"
                label="Password"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
                <Typography>
                  <em>Dev mode, no actual auth. Click 'Sign in' to explore the app.</em>
                </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Login));
