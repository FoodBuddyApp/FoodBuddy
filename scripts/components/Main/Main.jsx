import React, { Component } from 'react';
import {
   Navbar, Nav, NavItem, ListGroup,
   ListGroupItem
} from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {Search, Recipes, RecipeDetail} from '../index.js';
import HamburgerMenu from 'react-hamburger-menu';
import SideBar from '../SideBar/SideBar';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';

import './Main.css';

export default class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         open: false
      }
   }

   handleClick() {
      this.setState({
          open: !this.state.open
      });
  }

   displayUser() {
      let user = window.sessionStorage.getItem("user") == null ? "Guest" : window.sessionStorage.getItem("user");

      return (
         <Navbar.Text pullRight>
            {`Welcome ${user}!`}
         </Navbar.Text>
      );
   }


   render() {
      console.log("props", this.props);
      return (
         <div>
            <img className="background" src="../../static/assets/foodBg.jpg"/>
            <div>
               <Navbar>
                  <Navbar.Header>
                     <div style={{position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)", marginLeft: "10px"}}>
                        <HamburgerMenu
                           isOpen={this.state.open}
                           menuClicked={this.handleClick.bind(this)}
                           width={18}
                           height={15}
                           strokeWidth={1}
                           rotate={0}
                           color='black'
                           borderRadius={0}
                           animationDuration={0.5}
                        />
                     </div>
                     <Navbar.Brand>
                        <a href="/">Food Buddy</a>
                     </Navbar.Brand>
                  </Navbar.Header>

                  {this.displayUser()}
                  
               </Navbar>
               <SideBar {...this.props} visible={this.state.open}/>
            </div>
            <div>
               {/* <Search {...this.props} /> */}
               <Switch>
                  <Route exact path='/'
                     render={() => <Search {...this.props} />} />
                  <Route path='/signup'
                     render={() => <Signup {...this.props} />} />
                  <Route path='/login'
                     render={() => <Login {...this.props} />} />
                  <Route path='/recipes'
                     render={() => {
                        if(this.props.Recipes)
                           return <Recipes {...this.props} />
                        else
                           return <Redirect to='/' />
                     }}
                  />
                  <Route path='/recipe/:id'
                     render={({match}) => {
                        console.log(match)
                        var recipe = this.props.Recipes.find((recipe) => 
                           recipe.id == match.params.id)
                        if(recipe) {
                           return <RecipeDetail 
                                    // {...recipe}
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