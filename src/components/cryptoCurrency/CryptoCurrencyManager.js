import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currenciesActions from '../../actions/currenciesActions';
import CryptoCurrencyRow from './CryptoCurrencyRow';
import toastr from 'toastr';

class CryptoCurrencyManager extends React.Component {

  constructor(props, context) {
    super(props, context);
     this.state ={
       cryptoCurrency: Object.assign({},this.props.cryptoCurrency),
       cryptoCurrencyName: this.props.cryptoCurrency.name,
       errors: {}
     };
    this.updateCryptoAmount = this.updateCryptoAmount.bind(this);
  }

  updateCryptoAmount(amount){
    //Update the state of this array specifically the currency that was changed
    let cryptoCurrency = Object.assign({},this.state.cryptoCurrency);
    cryptoCurrency.name = this.state.cryptoCurrencyName;
    cryptoCurrency.amount = amount;

    this.props.actions.updateCurrencyAmount(this.props.currencies ,  cryptoCurrency);
      // .then(this.setState({ cryptoCurrency: cryptoCurrency}))
      // .catch(error=> {toastr.error(error);
      //   this.setState({saving:false});
      // });

    // return new Promise((resolve, reject) => {
    //   resolve(Object.assign([], dispatch(loadCurrenciesSuccess(dispatch(updateCurrencyAmountSuccess(currency))))));
    // });
  }

  render(){
    return (
      <CryptoCurrencyRow key={this.props.cryptoCurrency.name}
                         cryptoCurrency={this.props.cryptoCurrency}
                         onChange={this.updateCryptoAmount}
                         errors={this.state.errors}/>
    );
  }
}


CryptoCurrencyManager.propTypes={
  cryptoCurrency: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  actions:  PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors :  PropTypes.object
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {

  return {currency: state.cryptoCurrency};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(currenciesActions,dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrencyManager);


