import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './actions/actionCreators';

import FakeComponent from './components/fakeComponent/fakeComponent';

class Main extends Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      console.log("Mounted", this.props);
   }

   render() {
      return (
         <div>
            <h1>HELLO, WORLD!</h1>
            <FakeComponent />
         </div>
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