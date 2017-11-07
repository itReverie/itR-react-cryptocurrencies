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
       errors: {}
     };
  }

  render(){
    return (
      <CryptoCurrencyRow key={this.state.cryptoCurrency.id}
                         cryptoCurrency={this.state.cryptoCurrency}
                         errors={this.state.errors}/>
    );
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
  return {currency: state.cryptoCurrency};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(currenciesActions,dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrencyManager);


