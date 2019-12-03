import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Video from "./components/Video/Video";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Login} />
        <Route exact path="/video/:userId" component={Video} />
      </ThemeProvider>
    </div>
  );
}

export default App;
