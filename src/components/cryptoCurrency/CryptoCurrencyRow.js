import React from 'react';
import NumberInput from '../common/NumberInput';
import PropTypes from 'prop-types';

class CryptoCurrencyRow extends React.Component
{
  render ()
  {
    return (
      <tr>
        <td>{this.props.cryptoCurrency.name}</td>
        <td><NumberInput
          name={this.props.cryptoCurrency.name}
          placeholder="Amount"
          value={this.props.cryptoCurrency.amount}
          onChange={this.props.onChange}
          error={this.props.errors}/>
        </td>
      </tr>
    );
  }
}


CryptoCurrencyRow.propTypes = {
  cryptoCurrency: PropTypes.object.isRequired,
  onChange : PropTypes.func.isRequired,
  errors : PropTypes.object
};



export default CryptoCurrencyRow;

