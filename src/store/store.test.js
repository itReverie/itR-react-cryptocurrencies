import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import initialState from '../reducers/initialState';
import * as portfolioActions from '../actions/currenciesActions';


describe('Store', function(){
  it('Should handle loading currencies', function(){

    //arrange
    const store=createStore(rootReducer, initialState);

    const currencies = [{name:'BTC', amount:0},
      {name:'ETH', amount:0},
      {name:'LTC', amount:0}];

    //act
    const action= portfolioActions.loadCurrenciesSuccess(currencies);
    store.dispatch(action);

    //assert
    const actual= store.getState().currencies;

    const expected = [{name:'BTC', amount:0},
      {name:'ETH', amount:0},
      {name:'LTC', amount:0}];

    expect(actual).toEqual(expected);

  });
});
