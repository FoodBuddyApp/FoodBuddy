import React, { Component } from 'react';
import {
   Navbar, Nav, NavItem, ListGroup,
   ListGroupItem
} from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Search from '../Search/Search'

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
                        <a href="#home">Food Buddy</a>
                     </Navbar.Brand>
                  </Navbar.Header>
               </Navbar>
            </div>
            <div>
               <Switch>
                  <Route path='/'
                     render={() => <Search Ingredients={["chicken", "olive oil", "basil", "salt", "pepper", "apples", "barbeque sauce", "cheese", "garlic salt"]} {...this.props} />} />
               </Switch>
            </div>
         </div>
      );
   }
}