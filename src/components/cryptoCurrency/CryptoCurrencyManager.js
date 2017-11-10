import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//TODO: Maybe you can avoid having to update the whole list of currencies and maybe if you add just one action for this currency
//You pass just one currency and update the state here
import * as currenciesActions from '../../actions/currenciesActions';
import CryptoCurrencyRow from './CryptoCurrencyRow';
import PropTypes from 'prop-types';

class CryptoCurrencyManager extends React.PureComponent {

  constructor(props) {
    super(props);
     this.state ={
       cryptoCurrency: Object.assign({},this.props.cryptoCurrency),
       errors: {}//Object.assign({},{message:'Nop'})
     };
  }

  updateCurrencyAmount(event)
  {
    //let amountCurrencyChanged= event.target.value; // If using a TextField from Material Design
    let amountCurrencyChanged= event;
      let currentCryptoCurrency = Object.assign({},this.props.cryptoCurrency);
      currentCryptoCurrency.amount = amountCurrencyChanged;
      this.props.actions.updateCurrencyAmount(currentCryptoCurrency);
  }


  componentWillMount()
  {
    this.updateCurrencyAmount = this.updateCurrencyAmount.bind(this);
  }

  //,<div>{this.state.errors.message}</div>
  render(){
    return ([
      <CryptoCurrencyRow key={this.props.cryptoCurrency.id}
                         cryptoCurrency={this.props.cryptoCurrency}
                         onChange={this.updateCurrencyAmount}
                         errors={this.props.errors} />
      ]);
  }
}


CryptoCurrencyManager.propTypes={
  cryptoCurrency: PropTypes.object.isRequired,
  actions:  PropTypes.object.isRequired,
  errors :  PropTypes.object
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {currency: state.cryptoCurrency, error:state.error};
}

function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(currenciesActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrencyManager);


