import expect from 'expect';
import * as portfolioActions from './currenciesActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock'; // To mock http calls
import configureMockStore from 'redux-mock-store'; // to mock a redux store


describe('Portfolio Actions', () => {


  describe('loadCurrenciesSuccess', () => {
    it('should create a LOAD_CURRENCIES_SUCCESS action', () => {

      //arrange
      const currencies = [{name:'BTC', amount:0},
                          {name:'ETH', amount:0},
                          {name:'LTC', amount:0}];

      const expectedAction = {
        type: types.LOAD_CURRENCIES_SUCCESS,
        currencies: currencies
      };

      //act
      const action = portfolioActions.loadCurrenciesSuccess(currencies);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });


});

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Portfolio Actions Thunk', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_CURRENCIES_SUCCESS when loading portfolio', (done) => {

      // Here's an example call to nock.
      // nock('http://example.com/')
      //   .get('/courses')
      //   .reply(200, { body: { course: [{ id: 'clean-code', title: 'Clean Code'}] }});

      const currencies = [{name:'BTC', amount:0},
        {name:'ETH', amount:0},
        {name:'LTC', amount:0}];

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_CURRENCIES_SUCCESS, body: { currencies: currencies }}];


      const store = mockStore({currencies: []}, expectedActions, done);


      store.dispatch(portfolioActions.loadCurrencies()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_CURRENCIES_SUCCESS);
        //TODO: check how can I check the body
        done();
      });
    });
  });
});
