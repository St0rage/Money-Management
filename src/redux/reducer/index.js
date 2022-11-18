import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {authReducer} from './auth';
import {mainReducer} from './main';

const reducer = combineReducers({
  globalReducer,
  authReducer,
  mainReducer,
});

export default reducer;
