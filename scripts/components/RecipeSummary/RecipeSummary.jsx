import React, {Component} from 'react';
import './RecipeSummary.css';

import { Image, Button } from 'react-bootstrap';

export default class Recipes extends Component {
   constructor(props) {
      super(props);

      this.state = {};

      this.recipeClicked = this.recipeClicked.bind(this)
      this.transitionToDetail = this.transitionToDetail.bind(this)
   }

   recipeClicked() {
      this.props.getRecipeDetail({id: this.props.id}, this.transitionToDetail)
   }

   transitionToDetail() {
      this.props.history.push('/recipe/' + this.props.id)
   }

   renderRating(rating) {
      let arr = [];
      
      for(let i = 0; i < rating; i++) {
         arr.push(<i key={i} className="fa fa-fw fa-star" />);
      }

      if(parseInt(this.props.rating) - rating > 0)
         arr.push(<i className="fa fa-fw fa-star-half" />);
      
      return (
         <div className="subProperty">
            {arr}
         </div>
      );
   }

   render() {
      return (
         <div className="cell overlay" onClick={this.recipeClicked}>
            <div className="image">
               <Image src={this.props.image}/>
            </div>
            <div className="recipeInfoBlock">
               <div className="text">
                  <h2>{this.props.title}</h2>
               </div>
               <div className="info"> 
                  <div className="property"><h4>Rating:</h4>
                     {this.renderRating(Math.floor(parseInt(this.props.rating)))}
                  </div>
                  <div className="property"><h4>Cooking Time:</h4><div className="subProperty"><p>{`${this.props.time} minutes`}</p></div></div>
                  <div className="property"><h4>Ingredients Count:</h4><div className="subProperty"><p>{this.props.ingredients.length}</p></div></div>
                  <div className="property"><h4>Course:</h4><div className="subProperty"><p>{this.props.attributes.course ? this.props.attributes.course.map((crs, idx) => {
                     if(this.props.attributes.course.length - idx > 1)
                        return `${crs}, `
                     return `${crs}`
                  }) : null}</p></div></div>
                  {/* <h4>{"Used Ingredients: " + this.props.usedIngredients.length}</h4> */}
                  {/* <h4>{"Missing Ingredients: " + this.props.missedIngredients.length}</h4> */}
               </div>
            </div>
         </div>
      );
   }
}