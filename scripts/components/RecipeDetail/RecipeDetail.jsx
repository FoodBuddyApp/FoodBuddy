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
         <div className="centered-div">
            <h1>{this.props.title}</h1>
            <Image src={this.props.image} />
            <div className="cell center">
               <h2>Ingredients</h2>
               {this.props.missedIngredients.map((user) => {
                  return <div key={user.id}><h4>{user.originalString}</h4></div>;
               })}
               {this.props.usedIngredientCount > 0 &&
                  this.props.usedIngredients.map((user, i) => {
                     return <div key={i}><h4>{user.originalString}</h4></div>;
                  }) 
               }
            </div>
               {this.props.RecipeDetail.analyzedInstructions.length > 0 &&
                  <div className="cell left">
                     <h2 className="center">Cooking Instructions</h2>
                     {this.props.RecipeDetail.analyzedInstructions[0].steps.map((user) => {
                        return <div key={user.number}><h4>Step {user.number}: {user.step}</h4></div>;
                     })}
                  </div>
               }
         
            
         </div>
      );
   }
}

