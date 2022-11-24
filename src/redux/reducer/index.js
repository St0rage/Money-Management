import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {globalReducer} from './global';
import {mainReducer} from './main';
import {piggyBankReducer} from './piggybank';

const reducer = combineReducers({
  globalReducer,
  authReducer,
  mainReducer,
  piggyBankReducer,
});

export default reducer;
