import expect from 'expect';
import {formatCurrencies, formatCurrentPrices} from "./formatter";

describe ('Formatting Currencies', ()=>{


    it('should return a currency object with name and amount', ()=>{
      const currencies= [{name:'BTC'},{name:'ETH'},{name:'LTC'}];

      const expected = [{id:0, name:'BTC', amount:null},
                        {id:1, name:'ETH', amount:null},
                        {id:2, name:'LTC', amount:null}];

      expect(formatCurrencies(currencies)).toEqual(expected);

    });

  it('should return a currency object with name and price', ()=>{
    const currencies = [{amount:0,
                         position24:'1',
                          position:'1',
                          short:'XCP',
                          price:'251.42000000'},
                        {amount:0,
                          position24:'1',
                          position:'1',
                          short:'PRO',
                          price:'351.42000000'}];

    const expected = [{amount:0, name:'XCP', currentPrice:251.42000000, last24hrsPrice:0},
                      {amount:0, name:'PRO', currentPrice:351.42000000, last24hrsPrice:0}];

    expect(formatCurrentPrices(currencies)).toEqual(expected);

  });


});
