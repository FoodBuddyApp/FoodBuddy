import React, {Component} from 'react';
import {
   Navbar, Nav, NavItem, ListGroup,
   ListGroupItem
} from 'react-bootstrap';
import './SideBar.css';

export default class SideBar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         loaded: false
      };
   }

   componentWillMount() {
      if(!this.state.loaded && this.props.visible)
         this.setState({loaded: true});
   }

   logOut() {
      window.sessionStorage.clear();
      window.location.reload();
   }

   renderSideBarNotLoggedIn() {
      return (
         <div className="sideBar">
            <a href="login" style={{display: "block", outline: "none"}}>
               <i className="fa fa-fw fa-user" />
               <span className="item-list">Login</span>
            </a>

            <a href="signup" style={{display: "block", outline: "none"}}>
               <i className="fa fa-fw fa-pencil" />
               <span className="item-list">Sign Up</span>
            </a>
         </div>
      );
   }

   renderSideBarLoggedIn() {
      return (
         <div className="sideBar">
            <a href="savedRecipes" style={{display: "block", outline: "none"}}>
               <i className="fa fa-fw fa-cutlery" />
               <span className="item-list">Recipes</span>
            </a>

            <a href="" style={{display: "block", outline: "none"}} onClick={() => this.logOut()}>
               <i className="fa fa-fw fa-sign-out" />
               <span className="item-list">Logout</span>
            </a>
         </div>
      );
   }

   renderSideBar() {
      return this.props.Users.loggedIn ? this.renderSideBarLoggedIn() : this.renderSideBarNotLoggedIn();
   }

   render() {
      // console.log(this.props);
      let renderStatus = this.props.visible ? "sideBarContainer easeIn" : this.state.loaded ? "sideBarContainer easeOut" : "none";

      return (
         <div className={renderStatus}>
            {this.renderSideBar()}
         </div>
      );
   }
}