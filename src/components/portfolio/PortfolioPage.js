import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currenciesActions from '../../actions/currenciesActions';
import CryptoCurrencyList from '../cryptoCurrency/CryptoCurrencyList';
import ReturnPercentage from '../returnPercentage/ReturnPercentage';
import toastr from 'toastr';


class PortfolioPage extends React.Component
{

  constructor (props, context) {
    super(props, context);

    this.state={
      currencies: Object.assign({}, this.props.currencies),
      returnPercentage: 10,
      saving: false
    };

    //this.updateCryptoAmount = this.updateCryptoAmount.bind(this);
    this.calculateReturnPercentage = this.calculateReturnPercentage.bind(this);
  }


  // updateCryptoAmount(currency){
  //   //Update the state of this array specifically the currency that was changed
  //
  //   //let cryptoCurrency = Object.assign({},this.state.cryptoCurrency);
  //   //cryptoCurrency.amount = amount;
  //
  //   this.props.actions.updateCurrencyAmount(currency);
  //   debugger;
  //   //return this.setState({cryptoCurrency: cryptoCurrency});
  // }

  calculateReturnPercentage(){
        let currenciesWithAmount=this.props.currencies.filter(currency => currency.amount>0);
        this.props.actions.calculateReturnPercentage(currenciesWithAmount);
       // .then(this.setState({returnPercentage:20}))
       // .catch(error=> {toastr.error(error);
       //   this.setState({saving:false});
       // });
  }

 render(){

    const {currencies} = this.props.currencies;
   return (
     <div>
       <h1>Cryptocurrencies Portfolio</h1>

       <CryptoCurrencyList cryptoCurrencies={this.props.currencies} onChange={this.updateCryptoAmount}/>

       <input type="submit"
              value="Calculate"
              className="btn btn-primary"
              onClick={this.calculateReturnPercentage}/>

       <ReturnPercentage returnPercentage={this.state.returnPercentage} />

     </div>
   );
 }
}


PortfolioPage.propTypes={
  currencies:PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};



//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {

    return {currencies: state.currencies};
}


function mapDispatchToProps (dispatch)
{
  return {
       actions: bindActionCreators(currenciesActions,dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
