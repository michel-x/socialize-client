import React, { Component } from 'react';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core';
import createTheme from '@material-ui/core/styles/createMuiTheme';
// Components
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const theme = createTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#0008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/login" component={Login} /> 
                <Route exact path="/signup" component={Signup} /> 
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}
