import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currencyReducer(state = initialState.currencies, action) {
  switch (action.type) {

    case types.LOAD_CURRENCIES_SUCCESS:
      return action.currencies;

    case types.UPDATE_CURRENCY_AMOUNT_SUCCESS: {
      const updatedItems = state.map(currency => {
        if (currency.id === action.currency.id) {
          return Object.assign({},action.currency);
        }
        return Object.assign({},currency);
      });
      return updatedItems;
    }



    default:
      return state;

  }
}
