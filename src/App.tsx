import React, { Component } from 'react';
import './App.css';
// Components
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


export default class App extends Component {
  render() {
    return (
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
    )
  }
}
