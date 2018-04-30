import React, {Component} from 'react';
import './RecipeDetail.css';
import { Image, Button } from 'react-bootstrap';

export default class RecipeDetail extends Component {
   constructor(props) {
      super(props);

      this.state = {
         recipe: null
      };

   }

   componentWillMount() {
      let recipe = this.props.Recipes.filter(recipe => {
         return recipe.id === this.props.RecipeDetail.id;
      });
      this.setState({recipe: recipe[0]});
   }

   render() {
      return (
         <div className="centered-div">

            <h1>{this.props.title}</h1>

            <div className="cell ">

               <div className="image">
                  <Image src={this.props.image} responsive/>
               </div>

               <div className="text right">

                  <h2>Recipe info</h2>
                  <h4 className="left">Servings: {this.props.RecipeDetail.servings}</h4>
                  {this.props.RecipeDetail.preparationMinutes &&
                  <h4 className ="left">Prep Time: {this.props.RecipeDetail.preparationMinutes} Minutes</h4>}
                  {this.props.RecipeDetail.cookingMinutes > 0 ?
                     (this.props.RecipeDetail.cookingMinutes > 60 ?
                        <h4>Cooking Time: {this.props.RecipeDetail.cookingMinutes/60} Hours</h4> :
                        <h4>Cooking Time: {this.props.RecipeDetail.cookingMinutes} Minutes</h4>)
                     : <h4 className="left">Ready In {this.props.RecipeDetail.readyInMinutes} Minutes</h4>}
               </div>

            </div>

            <div className="cell center">

               <h2>Ingredients</h2>

               {this.props.RecipeDetail.extendedIngredients.map(ingr => {
                  var isBold = "notBold";

                  this.state.recipe.usedIngredients.map(usedIngr => {
                     if(ingr.id === usedIngr.id) {
                        isBold = "bold";
                     }
                  })

                  return (
                     <div key={ingr.id}>
                        <h4 className={isBold}>{ingr.name[0].toUpperCase() + ingr.name.substring(1)}</h4>
                     </div>
                  );
               })}

            </div>
               {this.props.RecipeDetail.analyzedInstructions.length > 0 &&
                  <div className="cell left">
                     <h2 className="center">Cooking Instructions</h2>
                     {this.props.RecipeDetail.analyzedInstructions[0].steps.map((step) => {
                        return <div key={step.number}><h4><b>Step {step.number}:</b> {step.step}</h4></div>;
                     })}
                  </div>
               }
         </div>
      );
   }
}

