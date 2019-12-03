import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CalendarContainer from './components/Calendar/CalendarContainer';
import DashboardContainer from './components/dashboard/DashboardContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme} from './styles/theme'
import { AnimatedSwitch } from 'react-router-transition';
import Trophy from './components/trophy/Trophy';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" component={Login} />
      <Route exact path="/trophy" component={Trophy}/>
      <Route exact path="/calendar" component={CalendarContainer} />
      <Route path="/dashboard" component={DashboardContainer}/>
      </AnimatedSwitch>
    </ThemeProvider>
    </div>
  );
}

export default App;
