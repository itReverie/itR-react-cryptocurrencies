//Format currencies from just text to having a
//{name, amount} properties
export function formatCurrencies(listOfCurrencies) {
  return listOfCurrencies.map(currency => {
    return {
      name: currency,
      amount: 0
    };
  });
}


export function formatCurrentPrices(listOfCurrencies) {
  return listOfCurrencies.map(currency => {
    return {
      name: currency.short,
      currentPrice:  parseFloat(currency.price),
      last24hrsPrice: 0
    };
  });
}

export function formatHistoryPrices(currencyName, currencyPrice) {

    return {
      name: currencyName,
      currentPrice:  parseFloat(currencyPrice)
    };

}

