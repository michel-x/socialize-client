import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core';
import createTheme from '@material-ui/core/styles/createMuiTheme';
// Components
import defaultTheme from './utils/theme';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const theme = createTheme(defaultTheme);

const token = localStorage.FBIdToken;
let authenticated: boolean = false;

if (token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

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
