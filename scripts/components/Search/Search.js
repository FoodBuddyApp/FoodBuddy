import React, { Component } from 'react';
import {
   Button, FormGroup, InputGroup, FormControl
} from 'react-bootstrap';
import './Search.css'

export default class Search extends Component {
   constructor(props) {
      super(props);

   }

   buttonClicked() {
      console.log("Do stuff")
   }

   render() {
      return (
         <div className="hCentered-div">
            <h1>Search Recipes by Ingredient</h1>
            <div className="centered-div">
               <p>Enter in as many ingredients as you like and we will find recipes
               using only those ingredients!
               </p>
               <FormGroup>
                  <InputGroup>
                     <FormControl type="text" />
                     <InputGroup.Button>
                     <Button onClick={this.buttonClicked}>Search</Button>
                     </InputGroup.Button>
                  </InputGroup>
               </FormGroup>
            </div>
         </div>
      );
   }
}