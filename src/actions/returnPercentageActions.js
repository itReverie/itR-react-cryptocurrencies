import * as types from './actionTypes';
import cryptoCurrencyApi from '../api/mockCryptoCurrencyApi';
import {beginAjaxCall,ajaxCallError} from "./ajaxStatusActions";


export function calculateReturnPercentageSuccess(returnPercentage)
{
  return {type : types.CALCULATE_RETURN_SUCCESS, returnPercentage};
}


let assignAmount= function(currency) {
  let currencyBought= this.currenciesBought.filter(a=>a.name== currency.name);
  let resultAmount= (currencyBought.length>0) ? currencyBought[0].amount :0;
   return {
         name: currency.name,
         amount: resultAmount,
         currentPrice:  parseFloat(currency.currentPrice),
         last24hrsPrice: 0
       };
};

export function calculateOverallReturn(currencies){
  return function (dispatch){

    //Loading dots (Async state to create a user experience)
    dispatch(beginAjaxCall());

    //TODO: Ideally this call should be on another layer at the back end. Move if there is time.

    //Call to the API to get the current prices and filter to get just the ones we bought
    cryptoCurrencyApi.getCurrentPrices().then(currentPrices => {
        let totalOfCurrentPrices=currentPrices.filter(currency => !currencies.includes(currency.name))
                                   .map(assignAmount, {currenciesBought:currencies})
                                   .reduce( (sum,cur) => sum + (cur.currentPrice * cur.amount), 0);

         dispatch(calculateReturnPercentageSuccess(totalOfCurrentPrices));

      })
      .catch(error => {
        throw (error);
      });
  };
}



