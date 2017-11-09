import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

//const NumberInput = ({name,  onChange, placeholder, value, error}) => {
class NumberInput extends React.PureComponent
{

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.onClick = this.onClick.bind(this);
  // }


  render() {
    return (
      <TextField
        onChange={this.props.onChange}
        name={this.props.name}
        value={this.props.value}
        fullWidth={true}
        type="number"
      />
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
  error: PropTypes.string
};

export default NumberInput;
