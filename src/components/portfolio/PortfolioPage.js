import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currenciesActions from '../../actions/currenciesActions';
import CryptoCurrencyList from '../cryptoCurrency/CryptoCurrencyList';
import ReturnPercentage from '../returnPercentage/ReturnPercentage';
import PropTypes from 'prop-types';

class PortfolioPage extends React.PureComponent
{

  constructor (props, context) {
    super(props, context);

    this.state={
      currencies: Object.assign({}, this.props.currencies),
      returnPercentage: 0,
      saving: false
    };
  }

  componentWillMount()
  {
    this.calculateReturnPercentage = this.calculateReturnPercentage.bind(this);
  }

  calculateReturnPercentage(){
        let currenciesWithAmount=this.props.currencies.filter(currency => currency.amount>0);
        this.props.actions.calculateReturnPercentage(currenciesWithAmount);
       // .then(this.setState({returnPercentage:20}))
       // .catch(error=> {toastr.error(error);
       //   this.setState({saving:false});
       // });
  }

 render(){
   return (
     <div>
       <h1>Cryptocurrencies Portfolio</h1>

       <CryptoCurrencyList cryptoCurrencies={this.props.currencies} />

       <input type="submit"
              value="Calculate"
              className="btn btn-primary"
              onClick={this.calculateReturnPercentage} />

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
