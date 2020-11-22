import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core';
import createTheme from '@material-ui/core/styles/createMuiTheme';
//Redux
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {initialState} from './redux/store';
import rootReducer from './redux/reducers/rootReducer';
import {ActionType, Action} from './redux/types';
import {logoutUser, getUserData} from './redux/actions/userActions';
// Components
import defaultTheme from './utils/theme';
import Navbar from './components/Navbar';
import AuthRoute from './utils/AuthRoute';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const theme = createTheme(defaultTheme);

const token = localStorage.FBIdToken;
let authenticated: boolean = false;

if (token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    //@ts-ignore
    store.dispatch(logoutUser());
  } else {
    store.dispatch({type: ActionType.SET_AUTHENTICATED});
    //@ts-ignore
    store.dispatch(getUserData());
  }
}

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} /> 
                <AuthRoute exact path="/login" component={Login}/> 
                <AuthRoute exact path="/signup" component={Signup} /> 
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}
