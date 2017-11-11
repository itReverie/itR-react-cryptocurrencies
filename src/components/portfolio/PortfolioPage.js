import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currenciesActions from '../../actions/currenciesActions';
import CryptoCurrencyList from '../cryptoCurrency/CryptoCurrencyList';
import ReturnPercentage from '../returnPercentage/ReturnPercentage';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AppBar from '../common/TopBar'
import { withStyles} from 'material-ui/styles';
import styles from './styles'
import AppDrawer from '../common/AppDrawer'

class PortfolioPage extends React.Component
{

  constructor (props, context) {
    super(props, context);

    this.state={
      currencies: Object.assign({}, this.props.currencies),
      returnPercentage: 0,
      saving: false,
      open: false,
      anchorEl: null,
      openMenu: false,
      viewType: 'list',
      btnDrawerOpen: false,
      searchStyles: { display: 'none' },
      searchIconStyles: { display: 'block' },
      searchPosts: undefined,
      searchText: ''
    };
  }

  componentWillMount()
  {
    this.calculateReturnPercentage = this.calculateReturnPercentage.bind(this);
  }


  handleDrawerOpen = () => {
    this.setState({ open: true })
  }
  handleClick = event => {
    this.setState({
      openMenu: true,
      anchorEl: event ? event.currentTarget : null
    })
  }

  handleRequestClose = () => {
    this.setState({ openMenu: false })
  }

  handleLogout = () => {
    // eslint-disable-next-line
    window.location.href = 'http://localhost:8080/logout'
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  toggleDrawer = () => {
    this.setState({ btnDrawerOpen: !this.state.btnDrawerOpen })
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
   const classes = this.props.classes
   return (
     <div>
       <AppBar
               searchStyles={this.state.searchStyles}
               searchIconStyles={this.state.searchIconStyles}
               viewtype={this.state.viewType}
               open={this.state.open}
               anchorEl={this.state.anchorEl}
               classes={this.props.classes}
               openMenu={this.state.openMenu}
               handleDrawerOpen={this.handleDrawerOpen}
               handleClick={this.handleClick}
               handleRequestClose={this.handleRequestClose}
               handleLogout={this.handleLogout}
               style={{}}
       />
       <AppDrawer
         open={this.state.open}
         classes={this.props.classes}
         handleDrawerClose={this.handleDrawerClose}
         toggleDrawer={this.toggleDrawer}
         style={{}}
       />
       <CryptoCurrencyList cryptoCurrencies={this.props.currencies} />

       <Button
         raised
         onClick={this.calculateReturnPercentage} >
         Calculate
       </Button>

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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PortfolioPage));
