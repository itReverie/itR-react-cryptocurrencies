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
export function updateCurrencyAmount(currrencies, currencyUpdated){
  return function (dispatch) {

    //OPTION 1
    //let test= currrencies.filter(currency => currency.name !== currencyUpdated.name);
    //debugger;
    //test.push(currencyUpdated);
    //debugger;

    //OPTION 2
    let test= [
           ...currrencies.filter(currency => currency.name !== currencyUpdated.name),
           Object.assign({},currencyUpdated)
         ];
    return dispatch(updateCurrencyAmountSuccess(test));


    //return dispatch(loadCurrenciesSuccess(cryptoCurrencies));



    //Correct way
    // dispatch(updateCurrencyAmountSuccess(currency))
    //   .then(cryptoCurrencies => {dispatch(loadCurrenciesSuccess(cryptoCurrencies));})
    //   .catch(error => {
    //     throw (error);
    //   });


        //let cryptoCurrencies=dispatch(updateCurrencyAmountSuccess(currency));
        // return new Promise((resolve, reject) => {
        //   resolve(Object.assign([], dispatch(loadCurrenciesSuccess(dispatch(updateCurrencyAmountSuccess(currency))))));
        // });


  };
}

export function updateCurrencyAmountSuccess(currencies){
  return {type : types.UPDATE_CURRENCY_AMOUNT_SUCCESS, currencies};
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



