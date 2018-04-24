import React, {Component} from 'react';
import './RecipeDetail.css';

import { Image, Button } from 'react-bootstrap';

export default class RecipeDetail extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      return (
         <div>
            <h1>{this.props.title}</h1>
         </div>
      );
   }
}