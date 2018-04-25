import React, {Component} from 'react';
import './Recipes.css';

import { Button } from 'react-bootstrap';

import RecipeSummary from '../RecipeSummary/RecipeSummary'

export default class Recipes extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      return (
         <div className="centered-div">
            <h1>{this.props.Recipes.length + " Recipes Found!"}</h1>
            <div className="list">
               {this.props.Recipes.map((recipe) => {
                  return <RecipeSummary
                           title={recipe.title}
                           key={recipe.id}
                           id={recipe.id}
                           image={recipe.image}
                           usedIngredients={recipe.usedIngredients}
                           missedIngredients={recipe.missedIngredients}
                           {...this.props} 
                        />
               })}
            </div>
         </div>
      );
   }
}