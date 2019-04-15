import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import firstScreen from './FirstScreen.js'
export default combineReducers({
  firstScreen,
routing: routerReducer
});
