import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {globalReducer} from './global';
import {mainReducer} from './main';
import {piggyBankReducer} from './piggybank';
import {whislistReducer} from './whislist';

const reducer = combineReducers({
  globalReducer,
  authReducer,
  mainReducer,
  piggyBankReducer,
  whislistReducer,
});

export default reducer;
