import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './actions/actionCreators';
import Main from './components/Main/Main';

// These are the properties we'll automatically pass to Main
function mapStateToProps(state) {
   console.log("State is ", state);
   return {
      ...state
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(
   mapStateToProps,
   mapDispatchToProps
)(Main));

export default App;