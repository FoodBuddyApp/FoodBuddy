import React, {Component} from 'react';
import './RecipeSummary.css';

import { Image, Button } from 'react-bootstrap';

export default class Recipes extends Component {
   constructor(props) {
      super(props);

      this.state = {};

      this.recipeClicked = this.recipeClicked.bind(this)
   }

   recipeClicked() {
      this.props.history.push('/detail/' + this.props.id)
   }

   render() {
      return (
         <div className="cell overlay" onClick={this.recipeClicked}>
            <div className="image">
               <Image src={this.props.image} responsive/>
            </div>
            <div className="text">
               <h2>{this.props.title}</h2>
               <div className="info"> 
                  <h4>{"Used Ingredients: " + this.props.usedIngredients.length}</h4>
                  <h4>{"Missing Ingredients: " + this.props.missedIngredients.length}</h4>
               </div>
            </div>
         </div>
      );
   }
}