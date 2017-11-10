import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';

class NumberInput extends React.Component
{
  constructor(props) {
    super(props);
    this.state ={
      error: Object.assign({},this.props.error),
      errorStyle:''
    };
  }

  //Validate that the input is a number
  onKeyUp(e) {
    let amountCurrencyChanged= e.target.value;
    if( /\d/.test(amountCurrencyChanged)) {
      this.setState({error:{message:''},errorStyle:''});
    }else{
      this.setState({error:{message:'Invalid number.'},errorStyle:'input-error-border'});
    }
  }

  componentWillMount()
  {
    this.onKeyUp = this.onKeyUp.bind(this);
  }


  render() {
    return (
      <div>
      <NumericInput
        key = {this.props.name}
        precision={0}
        min={0}
        name={this.props.name}
        className={this.state.errorStyle}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        onKeyUp={this.onKeyUp}
        style={false}
      />
        <div className='input-error-font'>{this.state.error.message}</div>
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


export default NumberInput;

