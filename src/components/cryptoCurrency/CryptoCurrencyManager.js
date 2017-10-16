import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currenciesActions from '../../actions/currenciesActions';
import CryptoCurrencyRow from './CryptoCurrencyRow';
import PropTypes from 'prop-types';

class CryptoCurrencyManager extends React.Component {

  constructor(props) {
    super(props);
     this.state ={
       cryptoCurrency: Object.assign({},this.props.cryptoCurrency),
       cryptoCurrencyName: this.props.cryptoCurrency.name,
       index: this.props.index,
       errors: {}
     };
  }


  // componentWillMount()
  // {
  //   this.updateCryptoAmount = this.updateCryptoAmount.bind(this);
  // }
  //
  // updateCryptoAmount(event){
  //   //Update the state of this array specifically the currency that was changed
  //   //let cryptoCurrency = Object.assign({},this.state.cryptoCurrency);
  //
  //   //here i am receiving a number (1)
  //
  // }

  render(){
    return (
      <CryptoCurrencyRow key={this.state.cryptoCurrency.name}
                         index={this.props.index}
                         cryptoCurrency={this.state.cryptoCurrency}
                         onChange={this.updateCryptoAmount}
                         errors={this.state.errors}/>
    );
  }
}


CryptoCurrencyManager.propTypes={
  cryptoCurrency: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  index:PropTypes.number,
  actions:  PropTypes.object.isRequired,
  //onChange: PropTypes.func.isRequired,
  errors :  PropTypes.object
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {

  return {currency: state.cryptoCurrency,
          index: state.index
  };
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(currenciesActions,dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrencyManager);


