import {combineReducers} from 'redux';
import currencies from './currenciesReducer';
import returnPercentage from './returnPercentageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  currencies,
  returnPercentage,
  ajaxCallsInProgress
});


export default rootReducer;
