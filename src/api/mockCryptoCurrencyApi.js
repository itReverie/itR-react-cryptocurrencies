import delay from './delay';
import {formatCurrencies, formatCurrentPrices, formatHistoryPrices} from "../formatters/formatter";

const cryptoCurrencies = [{id: 1, name:"XCP"},
                          {id: 2, name:"PRO"},
                          {id: 3, name:"NXTI"},
                          {id: 4, name:"NIRO"},
                          {id: 5, name:"VCOIN"},
                          {id: 6, name:"ADN"}];

const currentPrices = [{position24:'1',
                        position:'1',
                        short:'XCP',
                        long:'Bitcoin',
                        time:1434562273127,
                        price:'10',
                        perc:'5.98',
                        volume:'48384700',
                        usdVolume:'48384700',
                        cap24hrChange:'5.98',
                        mktcap:3590824438.5,
                        supply:'14282175',
                        published:false},

                        {position24:'1',
                          position:'1',
                          short:'PRO',
                          long:'Bitcoin',
                          time:1434562273127,
                          price:'20',
                          perc:'5.98',
                          volume:'48384700',
                          usdVolume:'48384700',
                          cap24hrChange:'5.98',
                          mktcap:3590824438.5,
                          supply:'14282175',
                          published:false}];


const last24hrsPrices=[{market_cap:[],
                        price:250}];

function getCryptoCurrencies() {
  //http://socket.coincap.io/coins
  return dispatch => fetch(`http://www.coincap.io/coins`)
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_CRYPTOCURRENCIES_SUCCESS', data }),
      err => dispatch({ type: 'AJAX_CALL_ERROR', err })
    );
}


class cryptoCurrencyApi {

  static getAllCryptoCurrencies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], formatCurrencies(cryptoCurrencies)));
      }, delay);
    });
  }

  static getCurrentPrices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], formatCurrentPrices(currentPrices)));
      }, delay);
    });
  }


  static getLast24hrsPriceXCryptoCurrency(currencyName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], formatHistoryPrices(currencyName,last24hrsPrices.price)));
      }, delay);
    });
  }

}

export default cryptoCurrencyApi;
