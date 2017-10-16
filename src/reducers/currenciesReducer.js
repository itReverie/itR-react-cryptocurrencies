import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currencyReducer(state = initialState.currencies, action) {
  switch (action.type) {
    // case types.CALCULATE_RETURN_SUCCESS:
    //   return [
    //     ...state.filter(currencies => currencies.amount>0),
    //     Object.assign({}, action.currencies)
    //   ];

    case types.LOAD_CURRENCIES_SUCCESS:
      return action.currencies;

    case types.UPDATE_CURRENCY_AMOUNT_SUCCESS: {
      const updatedItems = state.map(item => {
        if (item.index === action.currency.index) {
          return action.currency;
        }
        return item
      })
      return updatedItems
    }
    default:
      return state;

  }
}
