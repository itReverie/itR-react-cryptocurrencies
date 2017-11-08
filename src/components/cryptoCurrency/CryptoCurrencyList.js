import React from 'react';
import CryptoCurrencyManager from './CryptoCurrencyManager';
import PropTypes from 'prop-types';

const CryptoCurrencyList = ({cryptoCurrencies, errors /* onChange */}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      {cryptoCurrencies.map( (currency ) =>
        <CryptoCurrencyManager key={currency.id}
                               cryptoCurrency={currency}
                               errors={errors} />
      )}
      </tbody>
    </table>
  );
};

CryptoCurrencyList.propTypes={
  cryptoCurrencies:PropTypes.array.isRequired,
  errors : PropTypes.object
};

export default CryptoCurrencyList;
