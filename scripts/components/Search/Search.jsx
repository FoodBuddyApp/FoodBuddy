import React, { Component } from 'react';
import {
   Alert, Button, FormGroup, InputGroup, FormControl, Glyphicon
} from 'react-bootstrap';
import { RingLoader } from 'react-spinners'
import './Search.css'
import Options from '../Options/Options';

export default class Search extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentIngredient: "",
         ingredients: [],
         loading: false,
         error: false,
         showOptions: null
      }

      this.searchRecipes = this.searchRecipes.bind(this)
      this.removeIngredient = this.removeIngredient.bind(this)
      this.addIngredient = this.addIngredient.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.transitionToRecipes = this.transitionToRecipes.bind(this)
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
      let diet = this.props.Options.diet;
      let intolerances = this.props.Options.intolerances;
      this.setState({loading: true, error: false})
      // let url = 'recipe?includeIngredients=';
      let url = 'recipe?';
      
      //ingredients
      this.state.ingredients.map((ingr, idx) => {
         if(this.state.ingredients.length - idx > 1)
            url += `${ingr.toLowerCase()}+`;
         else
            url += `${ingr.toLowerCase()}&`;
      })

      //diet
      diet.map((item, idx) => {
         console.log(item);
         if(diet.length - idx > 1)
            url += `allowedDiet[]=${item.prefix}%2C`;
         else
            url += `allowedDiet[]=${item.prefix}&`;
      })

      //intolerances 
      intolerances.map((item, idx) => {
         if(intolerances.length - idx > 1)
            url += `allowedAllergy[]=${item.prefix}%2C`;
         else
            url += `allowedAllergy[]=${item.prefix}&`;
      })

      // url += `number=10&fillIngredients=true&instructionsRequired=true&ranking=1`;
      url += 'requirePictures=true';
      console.log(url);

      // this.props.searchRecipes({includeIngredients: this.state.ingredients}, this.transitionToRecipes)
      this.props.searchRecipes(url, this.transitionToRecipes);
   }

   transitionToRecipes() {
      if(this.props.Recipes.length > 0) {
         console.log(this.props)
         this.setState({loading: false, error: false})
         this.props.history.push('/recipes')
      }
      else {
         this.setState({loading: false, error: true})
      }
   }

   renderOptions() {
      var displayStatus = this.state.showOptions ? "animated fadeIn" : this.state.showOptions !== null ? "animated fadeOut" : "none"
      return (
         <div className={displayStatus}>
            <Options {...this.props} display={this.state.showOptions ? true : false}/>
         </div>
      );
   }

   render() {
      return (
         <div>
            {!this.state.loading ?
               <div className="small-centered-div">
                  <h1>Search Recipes by Ingredient</h1>
                  <div className="small-centered-div">
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
                        bsStyle="info" 
                        onClick={() => this.state.showOptions ? this.setState({showOptions: false}) : this.setState({showOptions: true})}
                        block
                     >
                        Options
                     </Button>

                     {this.renderOptions()}

                     <Button 
                        bsStyle="primary" 
                        disabled={!this.state.ingredients.length}
                        onClick={() => this.searchRecipes()}
                        block
                     >
                        Search!
                     </Button>
                     {this.state.error ?
                        <Alert 
                           bsStyle="danger"
                        >
                           Uh oh, something went wrong! Please try again.
                        </Alert>
                        :
                        ''
                     }
                  </div>
               </div>
               :
               <div className="loader">
                  <RingLoader
                     color={'#123abc'}
                     loading={this.state.loading}
                  />
               </div>
            }
         </div>
      );
   }
}