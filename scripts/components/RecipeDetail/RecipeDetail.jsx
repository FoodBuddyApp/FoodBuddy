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
      if(this.props.RecipeDetail)
         this.setState({recipe: this.props.RecipeDetail});
   }

   renderRating(rating) {
      let arr = [];
      
      for(let i = 0; i < rating; i++) {
         arr.push(<i key={i} className="fa fa-fw fa-star" />);
      }

      if(parseInt(this.state.recipe.rating) - rating > 0)
         arr.push(<i className="fa fa-fw fa-star-half" />);
      
      return (
         <div className="verticallyAlignedText">
            {arr}
         </div>
      );
   }

   renderRecipeProperties() {
      return (
         <div className="properties">

            <div className="propertyBlock">
               <h4>Rating:</h4>
               {this.renderRating(Math.floor(parseInt(this.state.recipe.rating)))}
            </div>

            <div className="propertyBlock">
               <h4>Time:</h4>
               
               <div className="verticallyAlignedText">
                  <p>{this.state.recipe.totalTime}</p>
               </div>
            </div>

            <div className="propertyBlock">
               <h4>Serving Count:</h4>
               
               <div className="verticallyAlignedText">
                  <p>{this.state.recipe.numberOfServings}</p>
               </div>
            </div>

            <div className="propertyBlock">
               <h4>Course:</h4>
               
               <div className="verticallyAlignedText">
                  <p>
                     {this.state.recipe.attributes.course ? 
                        this.state.recipe.attributes.course.map((crs, idx) => {
                           if(this.state.recipe.attributes.course.length - idx > 1)
                              return `${crs}, `
                           return `${crs}`
                        }) : null}
                  </p>
               </div>
            </div>


         </div>
      );
   }

   renderDetailsCard() {
      return (
         <div className="centered-div-smaller">
            <div className="cell card fixedHeight">
               
               <div className="title">
                  <h1>{this.state.recipe.name}</h1>
               </div>

               <div className="recipeDetails">
                  <div className="recipeDetailBlock">
                     <img className="recipeDetailImage" src={this.state.recipe.images[0].imageUrlsBySize["90"].split("=s90-c")[0]} />
                  </div>
                  
                  <div className="recipeDetailBlock">
                     {this.renderRecipeProperties()}
                  </div>
               </div>
               
            </div>
         </div>
      );
   }

   renderIngredients() {
      return (
         <div className="centered-div-smaller">
            <div className="cell dynamicHeight">
               
               <div className="title">
                  <h1>Ingredients</h1>
               </div>

               <div className="ingredientsDetails">
                  <div className="ingredientsDetailBlock">
                     {this.state.recipe.ingredientLines.map((ingr, idx) => {
                        return (
                           <div className="propertyBlock">
                              <div className="verticallyAlignedText">
                                 <p>{`• ${ingr}`}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               
            </div>
         </div>
      );
   }

   renderNutrition() {
      return (
         <div className="centered-div-smaller">
            <div className="cell card">
               
               <div className="title">
                  <h1>Nutrition</h1>
               </div>

               <div className="ingredientsDetails">
                  <div className="ingredientsDetailBlock">
                     
                     <div className="propertyBlock">
                        <h4>Calories:</h4>
                        
                        <div className="verticallyAlignedText">
                           <p>{this.state.recipe.nutritionEstimates.filter(nutr => {
                              console.log(nutr);
                              if(nutr.attribute === "ENERC_KCAL")
                                 return nutr.value + " calories";
                              })}
                           </p>
                        </div>
                     </div>

                     <div className="propertyBlock">
                        <h4>Total Fat:</h4>
                        
                        <div className="verticallyAlignedText">
                           <p>{this.state.recipe.nutritionEstimates.filter(nutr => {
                              if(nutr.attribute === "FAT")
                                 return nutr.value + " grams";
                              })}
                           </p>
                        </div>
                     </div>

                     <div className="propertyBlock">
                        <h4>Protein:</h4>
                        
                        <div className="verticallyAlignedText">
                           <p>{this.state.recipe.nutritionEstimates.filter(nutr => {
                              if(nutr.attribute === "PROCNT")
                                 return nutr.value + " grams";
                              })}
                           </p>
                        </div>
                     </div>

                     <div className="propertyBlock">
                        <h4>Cholesterol:</h4>
                        
                        <div className="verticallyAlignedText">
                           <p>{this.state.recipe.nutritionEstimates.filter(nutr => {
                              if(nutr.attribute === "CHOLE")
                                 return nutr.value + " grams";
                              })}
                           </p>
                        </div>
                     </div>

                     <div className="propertyBlock">
                        <h4>Sodium:</h4>
                        
                        <div className="verticallyAlignedText">
                           <p>{this.state.recipe.nutritionEstimates.filter(nutr => {
                              if(nutr.attribute === "NA")
                                 return nutr.value + " grams";
                              })}
                           </p>
                        </div>
                     </div>

                     <div className="propertyBlock">
                        <h4>Sugar:</h4>
                        
                        <div className="verticallyAlignedText">
                           <p>{this.state.recipe.nutritionEstimates.filter(nutr => {
                              if(nutr.attribute === "SUGAR")
                                 return nutr.value + " grams";
                              })}
                           </p>
                        </div>
                     </div>

                     <div className="propertyBlock">
                        <h4>Fiber:</h4>
                        
                        <div className="verticallyAlignedText">
                           <p>{this.state.recipe.nutritionEstimates.filter(nutr => {
                              if(nutr.attribute === "FIBTG")
                                 return nutr.value + " grams";
                              })}
                           </p>
                        </div>
                     </div>

                  </div>
               </div>
               
            </div>
         </div>
      );
   }

   render() {
      console.log(this.props);

      return (
         <div>
            {this.renderDetailsCard()}
            {this.renderIngredients()}
            {/* {this.renderNutrition()} */}
         </div>
      );
   }

   /* componentWillMount() {
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
   } */
}

