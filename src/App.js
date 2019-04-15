import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login.js'
import FirstScreen from './Components/FirstScreen.js'

import {Redirect,BrowserHistory,Switch} from 'react-router';
import {BrowserRouter as Router,Route,Link,withRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">


      <Router>
        <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/first/screen" component={FirstScreen}/>
          <Redirect from="/*" to="/login" />
        </Switch>
      </Router>
      </header>
    </div>
    );
  }
}

export default App;
