import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as returnPercentageActions from '../../actions/returnPercentageActions';
import PropTypes from 'prop-types';

class ReturnPercentage extends React.PureComponent
{

  constructor (props, context) {
    super(props, context);
  }

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
