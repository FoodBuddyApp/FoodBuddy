import React, {Component} from 'react';
import './fakeComponentStyle.css';

import { Button } from 'react-bootstrap';

export default class FakeComponent extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   componentDidMount() {
      console.log("Fake component mounted!");
   }

   render() {
      return (
         <div className="test">
            <Button bsStyle="primary">TEST</Button>
         </div>
      );
   }
}