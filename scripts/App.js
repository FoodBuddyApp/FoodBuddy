import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './actions/actionCreators';

class Main extends Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      console.log("Mounted", this.props);
   }

   render() {
      return (
         // Add your component markup and other subcomponent references here.
         <h1>Hello, World!</h1>
      );
   }
}

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