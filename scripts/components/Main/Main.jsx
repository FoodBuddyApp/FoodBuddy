import React, { Component } from 'react';
import {
   Navbar, Nav, NavItem, ListGroup,
   ListGroupItem
} from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {Search, Recipes, RecipeDetail} from '../index.js'

export default class Main extends Component {
   constructor(props) {
      super(props);
   }


   render() {
      return (
         <div>
            <div>
               <Navbar>
                  <Navbar.Header>
                     <Navbar.Brand>
                        <a href="/">Food Buddy</a>
                     </Navbar.Brand>
                  </Navbar.Header>
               </Navbar>
            </div>
            <div>
               <Switch>
                  <Route exact path='/'
                     render={() => <Search {...this.props} />} />
                  <Route path='/recipes'
                     render={() => {
                        if(this.props.Recipes)
                           return <Recipes {...this.props} />
                        else
                           return <Redirect to='/' />
                     }}
                  />
                  <Route path='/detail/:id'
                     render={({match}) => {
                        console.log(match)
                        var recipe = this.props.Recipes.find((recipe) => 
                           recipe.id == match.params.id)
                        if(recipe) {
                           return <RecipeDetail 
                                    {...recipe}
                                    {...this.props} 
                                  />
                        }
                        else {
                           return <Redirect to='/' />
                        }
                     }}
                  />
               </Switch>
            </div>
         </div>
      );
   }
}