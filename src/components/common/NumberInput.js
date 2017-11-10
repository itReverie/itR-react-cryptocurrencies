import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as errorActions from '../../actions/errorActions';
import NumericInput from 'react-numeric-input';

//const NumberInput = ({name,  onChange, placeholder, value, error}) => {
class NumberInput extends React.Component
{


  constructor(props) {
    super(props);
    this.state ={
      error: Object.assign({},this.props.error)
    };

    //this.handleChange = this.handleChange.bind(this);
    //this.onClick = this.onClick.bind(this);
  }


  render() {
    // let errorContent = this.state.error.message;
    // if(this.props.error && this.props.error.length > 0){
    //   errorContent += "background ";
    // }

    return (
      <div style={{color:'red'}}>
      <NumericInput
        key = {this.props.name}
        precision={0}
        min={0}
        name={this.props.name}
        className="form-control"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        style={false}
      />
        <div>{this.props.error.message}</div>
      </div>
    );
  }

  // handleChange(event, newValue){
  //   event.persist(); // allow native event access (see: https://facebook.github.io/react/docs/events.html)
  //   // give react a function to set the state asynchronously.
  //   // here it's using the "name" value set on the TextField
  //   // to set state.person.[firstname|lastname].
  //   this.setState((state) => state.person[event.target.name] = newValue);
  //
  // }

  // handleChange (e) {
  //
  //     [e.target.name]: e.target.value;
  //
  // }
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

