import * as types from './actionTypes';
import cryptoCurrencyApi from '../api/mockCryptoCurrencyApi';
import {beginAjaxCall,ajaxCallError} from "./ajaxStatusActions";
import {calculateOverallReturn} from "./returnPercentageActions";

//-------------------------
// LOADING A PORTFOLIO
//--------------------------
export function loadCurrencies(){
  return function (dispatch){

    //Loading dots (Async state to create a user experience)
    dispatch(beginAjaxCall());

    //Call to the API
    return cryptoCurrencyApi.getAllCryptoCurrencies()
      .then(cryptoCurrencies => {
        dispatch(loadCurrenciesSuccess(cryptoCurrencies));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadCurrenciesSuccess(currencies)
{
  return {type : types.LOAD_CURRENCIES_SUCCESS, currencies};
}


//-------------------------
// UPDATE CURRENCY
//--------------------------
export function updateCurrencyAmount(currency){
  return function (dispatch) {
     dispatch(updateCurrencyAmountSuccess(currency));
  };
}

function updateCurrencyAmountSuccess(currency){
  return {type : types.UPDATE_CURRENCY_AMOUNT_SUCCESS, currency};
}

//-------------------------
// RETURN PERCENTAGE
//--------------------------
export function calculateReturnPercentage(currencies){
  return function (dispatch){

    dispatch(beginAjaxCall());
    return dispatch(calculateOverallReturn(currencies));

  };
}





