import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';


const NumberInput = ({name,  onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0){
    wrapperClass += " "+ 'has-error';
  }
  return (
    <div className={wrapperClass}>

      <NumericInput
        precision={0}
        min={0}
        max="1000"
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        style={false}
        onChange={onChange}/>


    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
  placeholder : PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default NumberInput;
