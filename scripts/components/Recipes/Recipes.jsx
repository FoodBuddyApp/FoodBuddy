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
                           title={recipe.recipeName}
                           key={recipe.id}
                           id={recipe.id}
                           rating={recipe.rating}
                           image={recipe.imageUrlsBySize["90"].split('=s90-c')[0]}
                           time={parseInt(recipe.totalTimeInSeconds)/60}
                           ingredients={recipe.ingredients}
                           attributes={recipe.attributes}
                           // usedIngredients={recipe.usedIngredients}
                           // missedIngredients={recipe.missedIngredients}
                           {...this.props} 
                        />
               })}
            </div>
         </div>
      );
   }
}