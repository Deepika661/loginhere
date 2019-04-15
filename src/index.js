import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './Reducers/IndexReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux';
import {Redirect,BrowserHistory,Switch} from 'react-router';
import {BrowserRouter as Router,Route,Link,withRouter} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import Routes from './Routes.js';
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render((<Provider store={store}>
  <Router>
    <App />
  </Router>

  </Provider>),
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
