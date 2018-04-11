import React, { Component } from 'react';

import FakeComponent from './fakeComponent/fakeComponent';

export default class Main extends Component {
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