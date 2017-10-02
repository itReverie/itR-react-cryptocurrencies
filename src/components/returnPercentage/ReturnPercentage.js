import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as returnPercentageActions from '../../actions/returnPercentageActions';
import toastr from 'toastr';


class ReturnPercentage extends React.Component
{

  constructor (props, context) {
    super(props, context);

    //this.calculateOverallReturn = this.calculateOverallReturn.bind(this);
  }


  // calculateOverallReturn(){
  //   this.props.actions.calculateOverallReturn(this.state.currenciesBought)
  //     .then(alert('ok'))
  //     .catch(error=> {toastr.error(error);
  //       this.setState({saving:false});
  //     });
  //}

  render(){
    return (
      <div>
        <p>Return in the last 24hrs: {this.props.returnPercentage} </p>
      </div>
    );
  }
}


ReturnPercentage.propTypes={
  returnPercentage:PropTypes.number.isRequired,
  actions : PropTypes.object.isRequired
};



//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {returnPercentage: state.returnPercentage};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(returnPercentageActions,dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ReturnPercentage);
