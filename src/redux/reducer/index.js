import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {authReducer} from './auth';

const reducer = combineReducers({globalReducer, authReducer});

export default reducer;
