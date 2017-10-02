import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../common/NumberInput';

const CryptoCurrencyRow = ({cryptoCurrency, errors, onChange}) =>{
  return (
    <tr>
      <td>{cryptoCurrency.name}</td>
      <td> <NumberInput
        name={cryptoCurrency.name}
        placeholder="Amount"
        value={cryptoCurrency.amount}
        onChange={onChange}
        error={errors}/>
      </td>
    </tr>
  );
};


CryptoCurrencyRow.propTypes = {
  cryptoCurrency: PropTypes.object.isRequired,
  errors : React.PropTypes.object,
  onChange : React.PropTypes.func.isRequired
};

export default CryptoCurrencyRow;
