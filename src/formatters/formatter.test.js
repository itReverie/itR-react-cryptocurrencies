import expect from 'expect';
import {formatCurrencies, formatCurrentPrices} from "./formatter";

describe ('Formatting Currencies', ()=>{


    it('should return a currency object with name and amount', ()=>{
      const currencies= ['BTC','ETH','LTC'];

      const expected = [{name:'BTC', amount:0},
                        {name:'ETH', amount:0},
                        {name:'LTC', amount:0}];

      expect(formatCurrencies(currencies)).toEqual(expected);

    });

  it('should return a currency object with name and price', ()=>{
    const currencies = [{position24:'1',
                          position:'1',
                          short:'XCP',
                          price:'251.42000000'},
                        {position24:'1',
                          position:'1',
                          short:'PRO',
                          price:'351.42000000'}];

    const expected = [{name:'XCP', currentPrice:251.42000000, last24hrsPrice:0},
                      {name:'PRO', currentPrice:351.42000000, last24hrsPrice:0}];

    expect(formatCurrentPrices(currencies)).toEqual(expected);

  });


});
