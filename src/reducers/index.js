import {combineReducers} from 'redux';
import headers from './headers';
import configs from './configs';

const reducer = combineReducers({
  headers: headers,
  configs: configs,
});

export default reducer;
