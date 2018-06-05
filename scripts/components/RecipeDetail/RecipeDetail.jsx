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
            <Button
               bsStyle="primary"
               block
               href={this.state.recipe.source.sourceRecipeUrl}
            >
               View Recipe Instructions
            </Button>
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
                           <div key={idx} className="propertyBlock">
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
      let info = [];
      let nutrition = this.state.recipe.nutritionEstimates;
      for(let i = 0; i < nutrition.length; i++) {
         let curr = nutrition[i];
         switch(curr.attribute) {
            case "ENERC_KCAL":
               info.push({label: "Calories:", value: curr.value});
               break;
            case "FAT":
               info.push({label: "Total Fat:", value: curr.value+"g"});
               break;
            case "PROCNT":
               info.push({label: "Protein:", value: curr.value+"g"});
               break;
            case "CHOLE":
               info.push({label: "Cholesterol:", value: curr.value+"mg"});
               break;
            case "NA":
               info.push({label: "Sodium:", value: curr.value+"mg"});
               break;
            case "SUGAR":
               info.push({label: "Sugar:", value: curr.value+"g"});
               break;
            case "FIBTG":
               info.push({label: "Fiber:", value: curr.value+"g"});
               break;
            default:
               break;
         }
      }

      return (
         <div className="centered-div-smaller">
            <div className="cell card">
               
               <div className="title">
                  <h1>Nutrition</h1>
               </div>

               <div className="nutritionDetails">
                  <div className="nutritionDetailBlock">

                     {info.map((nutr, idx) => {
                        return (
                           <div key={idx} className="propertyBlock">
                              <h4>{nutr.label + " "}</h4>
                              
                              <div className="verticallyAlignedText">
                                 <p>{nutr.value}</p>
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

   render() {
      console.log(this.props);

      return (
         <div>
            {this.renderDetailsCard()}
            {this.renderIngredients()}
            {this.renderNutrition()}
         </div>
      );
   }
}