import React, { Component } from 'react';
import {
   Button, FormGroup, InputGroup, FormControl, Glyphicon
} from 'react-bootstrap';
import './Search.css'

export default class Search extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentIngredient: "",
         ingredients: []
      }

      this.searchRecipes = this.searchRecipes.bind(this)
      this.removeIngredient = this.removeIngredient.bind(this)
      this.addIngredient = this.addIngredient.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event) {
      const newState = {}
      newState[event.target.name] = event.target.value;
      this.setState(newState);
   }

   addIngredient() {
      if(this.state.currentIngredient) {
         const newState = {}
         newState.ingredients = this.state.ingredients.concat(this.state.currentIngredient)
         newState.currentIngredient = ""
         this.setState(newState)
      }
   }

   removeIngredient(ingredient) {
      const newState = {}
      newState.ingredients = this.state.ingredients.filter((ingr) => ingr != ingredient)
      this.setState(newState)
   }

   searchRecipes() {
      this.props.searchRecipes({ingredients: this.state.ingredients})
   }

   render() {
      return (
         <div className="centered-div">
            <h1>Search Recipes by Ingredient</h1>
            <div className="centered-div">
               <p>Enter in as many ingredients as you like and we will find recipes
               using only those ingredients!
               </p>
               <FormGroup>
                  <InputGroup>
                     <FormControl 
                        type="text"
                        name="currentIngredient"
                        value={this.state.currentIngredient}
                        placeholder="Type one ingredient, then press Enter or click Add"
                        onChange={this.handleChange}
                        onKeyPress={(e) => {if(e.key === 'Enter') this.addIngredient()}}
                     />
                     <InputGroup.Button>
                     <Button bsStyle="danger" onClick={this.addIngredient}>
                        Add
                     </Button>
                     </InputGroup.Button>
                  </InputGroup>
               </FormGroup>
               <div className="ingredientList">
                  {this.state.ingredients.map((i) => {
                     return (
                        <span className="ingredient" key={i}>
                           <Button
                              bsSize="small" 
                              onClick={(e) => {
                                 this.removeIngredient(i)
                              }}
                           >
                              {i + " "}
                              <Glyphicon glyph="remove" />
                           </Button>
                        </span>
                     )
                  })}
               </div>
               <Button 
                  bsStyle="primary" 
                  disabled={!this.state.ingredients.length}
                  onClick={() => this.searchRecipes()}
                  block
               >
                  Search!
               </Button>
            </div>
         </div>
      );
   }
}