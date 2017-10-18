import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import terminos from './terminos';

//import tags from './tags';
//import users from './users';

export default combineReducers({
  routing: routerReducer,
  terminos
})

