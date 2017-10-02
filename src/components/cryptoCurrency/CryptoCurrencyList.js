import React from 'react';
import PropTypes from 'prop-types';
import CryptoCurrencyManager from './CryptoCurrencyManager';

const CryptoCurrencyList = ({cryptoCurrencies, errors, onChange}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      {cryptoCurrencies.map( currency =>
        <CryptoCurrencyManager key={currency.name}
                               cryptoCurrency={currency}
                               currencies={cryptoCurrencies}
                               onChange={onChange}
                               errors={errors}/>
      )}
      </tbody>
    </table>
  );
};

CryptoCurrencyList.propTypes={
  cryptoCurrencies:PropTypes.array.isRequired,
  errors : React.PropTypes.object,
  onChange : React.PropTypes.func.isRequired

};

export default CryptoCurrencyList;
