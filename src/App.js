import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import CalendarContainer from './components/Calendar/CalendarContainer';
// import ScheduleContainer from './components/Schedule/ScheduleContainer';
import DashboardContainer from './components/dashboard/DashboardContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/theme';
import { AnimatedSwitch } from 'react-router-transition';
import Trophy from './components/trophy/Trophy';
import Video from './components/Video/Video';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='switch-wrapper'
        >
          <Route exact path='/' component={Login} />
          <Route exact path='/trophy' component={Trophy} />
          <Route exact path='/calendar' component={CalendarContainer} />
          {/* <Route exact path='/schedule' component={ScheduleContainer} /> */}
          <Route path='/dashboard' component={DashboardContainer} />
          <Route exact path='/video/:userId' component={Video} />
        </AnimatedSwitch>
      </ThemeProvider>
    </div>
  );
}

export default App;
