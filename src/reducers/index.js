import {combineReducers} from 'redux';
import headers from './headers';

const reducer = combineReducers({
  headers: headers,
});

export default reducer;
