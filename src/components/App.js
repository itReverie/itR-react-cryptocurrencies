//This component handles the App template used o every page

import React from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <Header
        loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes={
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

// As we need to pass the ajax counter to the header so we know when to hide the loader we need to add the mapStateToProp
function mapStateToProps(state){
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

//PropTypes.checkPropTypes()
export default connect(mapStateToProps)(App);

