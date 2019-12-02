import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme} from './styles/theme'




function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Route exact path="/" component={Login} />
    </ThemeProvider>
    </div>
  );
}

export default App;
