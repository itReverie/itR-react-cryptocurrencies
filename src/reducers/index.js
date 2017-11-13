import {combineReducers} from 'redux';
import currencies from './currenciesReducer';
import returnPercentage from './returnPercentageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  currencies,
  returnPercentage,
  ajaxCallsInProgress,
  error
});


export default rootReducer;
