import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NumberInput from '../common/NumberInput';
import PropTypes from 'prop-types';
import * as currenciesActions from '../../actions/currenciesActions';

class CryptoCurrencyRow extends React.Component
{
    constructor(props){

      super(props);
      this.state={
        cryptoCurrency : Object.assign({},this.props.cryptoCurrency),
        index : this.props.index,
        errors : this.props.errors
      };
    }

    componentWillMount()
    {
      this.updateCurrencyAmount = this.updateCurrencyAmount.bind(this);
    }

    updateCurrencyAmount(event)
    {
      let amountCurrencyChanged= event;
      let currentCryptoCurrency=this.props.cryptoCurrency;
      currentCryptoCurrency.amount = amountCurrencyChanged;
      this.props.actions.updateCurrencyAmount(currentCryptoCurrency);
    }

  render ()
  {
    return (
      <tr>
        <td>{this.props.cryptoCurrency.name}</td>
        <td><NumberInput
          name={this.props.cryptoCurrency.name}
          placeholder="Amount"
          value={this.props.cryptoCurrency.amount}
          onChange={this.updateCurrencyAmount}
          error={this.state.cryptoCurrency.errors}/>
        </td>
      </tr>
    );
  }
}


CryptoCurrencyRow.propTypes = {
  cryptoCurrency: PropTypes.object.isRequired,
  index: PropTypes.number,
  errors : PropTypes.object,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {

  return {
    currency: state.cryptoCurrency,
    index: state.index
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(currenciesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrencyRow);

