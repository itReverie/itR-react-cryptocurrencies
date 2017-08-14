import * as types from './actionTypes';
import cryptoCurrencyApi from '../api/mockCryptoCurrencyApi';
import {beginAjaxCall,ajaxCallError} from "./ajaxStatusActions";


export function calculateReturnPercentageSuccess(returnPercentage)
{
  return {type : types.CALCULATE_RETURN_SUCCESS, returnPercentage};
}

// function testMethod(currency, currenciesBought)
// {
//   let amount=currenciesBought.filter(c => c.name === currency.name)[0].amount;
//   debugger;
//   return  {
//     name: currency.name,
//     amount: amount,
//     currentPrice:  parseFloat(currency.currentPrice),
//     last24hrsPrice: 0
//   };
// }


function getTotalPrice(currentPrices, currenciesBought)
{
  let test=currentPrices.filter(currency => !currenciesBought.includes(currency.name))
                        .map((currency, currenciesBought) => {
                          //testMethod(currency, currenciesBought);
                            // let amount=currenciesBought.filter(c => { if(c.name === currency.name) return c}).amount;
                             return  {
                                      name: currency.name,
                                      amount: 0,
                                      currentPrice:  parseFloat(currency.currentPrice),
                                      last24hrsPrice: 0
                                    };
                        });

  return test;
}

function addHistorialCurrencies(arrayHistory, currency)
{
  return arrayHistory.push(currency);
}

function getHistoryPriceForEacCurrency(currenciesWithCurrentPrices, currenciesBought){
  //Call to the API to get the price in the last 24 hrs for each currency we bought as it is less expensive than calling all the currencies

  let currentPrices=getTotalPrice(currenciesWithCurrentPrices,currenciesBought);//currenciesWithCurrentPrices.filter(currency => !currenciesBought.includes(currency.name));
  let currenciesHistory=[];

  let totalOfCurrentPrices= currentPrices.reduce( (sum,cur) => sum+cur.currentPrice , 0);



  for(let i=0; i < currentPrices.length; i++)
  {

    cryptoCurrencyApi.getLast24hrsPriceXCryptoCurrency(currentPrices[i].name)
      .then(
        last24hrsPrice => { currenciesHistory=addHistorialCurrencies(currenciesHistory, last24hrsPrice);
        })
      .catch(error => {
        throw (error);
      });
  }

  return currenciesHistory;
}

//
// function getHistoryPrice(currenciesWithCurrentPrices){
//
//   let historyPrices=[];
//   for(let i=0; i < currenciesWithCurrentPrices.length; i++)
//   {
//
//
//     let last24hrsPrices = cryptoCurrencyApi.getLast24hrsPriceXCryptoCurrency(test[i].name)
//       .then(
//         last24hrsPrice => {
//           historyPrices.push = last24hrsPrice;
//         })
//       .catch(error => {
//         throw (error);
//       });
//
//   }
//
//   debugger;
//   return historyPrices;
// }


export function calculateOverallReturn(currencies){
  return function (dispatch){

    //Loading dots (Async state to create a user experience)
    dispatch(beginAjaxCall());

    //TODO: Ideally this call should be on another layer at the back end. Move if there is time.

    //Call to the API to get the current prices and filter to get just the ones we bought
    let currenciesWithCurrentPrices= cryptoCurrencyApi.getCurrentPrices()
      .then(currentPrices => {

        getHistoryPriceForEacCurrency(currentPrices,currencies);
        let totalOfCurrentPrices= currentPrices.reduce( (sum,cur) => sum+cur.currentPrice , 0);

         dispatch(calculateReturnPercentageSuccess(totalOfCurrentPrices));

      })
      // .then(currentHistoryPrices => {
      //   getHistoryPrice(currentHistoryPrices);
      // })
      .catch(error => {
        throw (error);
      });




    //return dispatch(calculateReturnPercentageSuccess(totalOfCurrentPrices.length));

  };
}



