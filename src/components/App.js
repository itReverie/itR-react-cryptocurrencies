//This component handles the App template used o every page

import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import {connect} from 'react-redux';
import Footer from "./common/Footer";
import styles from './App.scss';

console.log(styles);

class App extends React.Component {
  render(){
    return (
      <div className={styles.app}>
        <Header
        loading={this.props.loading}/>
        {this.props.children}
        <Footer loading={this.props.loading}/>
      </div>
    );
  }
}

App.propTypes={
  children: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

// As we need to pass the ajax counter to the header so we know when to hide the loader we need to add the mapStateToProp
function mapStateToProps(state){
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);

