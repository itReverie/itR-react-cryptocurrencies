import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as errorActions from '../../actions/errorActions';
import NumericInput from 'react-numeric-input';

class NumberInput extends React.Component
{
  constructor(props) {
    super(props);
    this.state ={
      error: Object.assign({},this.props.error)
    };
  }

  onKeyUp(e) {
    let amountCurrencyChanged= e.target.value;

    if( /\d/.test(amountCurrencyChanged)) {
      this.setState({error:{message:''}});
    }else{
      this.setState({error:{message:'Invalid number.'}});

    }
  }

  componentWillMount()
  {
    this.onKeyUp = this.onKeyUp.bind(this);
  }


  render() {
    // let errorContent = this.state.error.message;
    // if(this.props.error && this.props.error.length > 0){
    //   errorContent += "background ";
    // }

    return (
      <div>
      <NumericInput
        key = {this.props.name}
        precision={0}
        min={0}
        name={this.props.name}
        className="form-control"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        onKeyUp={this.onKeyUp}
        style={false}
      />
        <div style={{color:'red'}}>{this.state.error.message}</div>
      </div>
    );
  }

}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
  placeholder : PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.object
};

// -------------------------------------------------------------------
// Redux connect section
// -------------------------------------------------------------------
function mapStateToProps(state) {
  return {error: state.error};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(errorActions,dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);


//export default NumberInput;

