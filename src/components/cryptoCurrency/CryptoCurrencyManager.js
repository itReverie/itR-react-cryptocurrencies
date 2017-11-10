import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
    //let amountCurrencyChanged= event.target.value;
    let amountCurrencyChanged= event;

    if( /\d/.test(amountCurrencyChanged)) {
      let currentCryptoCurrency = Object.assign({},this.props.cryptoCurrency);
      currentCryptoCurrency.amount = amountCurrencyChanged;
      this.props.actions.updateCurrencyAmount(currentCryptoCurrency);
      this.props.actions.displayErrorMessageAction('');
    }
    else{
      //it seems that this.setState just has control over this component so to confirm that we will add a quick label in this component
      //this.setState({errors:{message:'Wrooong!!'}});
      this.props.actions.displayErrorMessageAction('wroong!! :D');
    }
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


