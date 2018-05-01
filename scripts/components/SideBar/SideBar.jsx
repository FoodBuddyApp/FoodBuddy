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

   render() {
      let renderStatus = this.props.visible ? "sideBarContainer easeIn" : this.state.loaded ? "sideBarContainer easeOut" : "none";

      if(!this.state.loaded && this.props.visible)
         this.setState({loaded: true});

      return (
         <div className={renderStatus}>
            <div className="sideBar">
               <Nav style={{height: "100%"}}>
                  <a href="login" style={{display: "block", outline: "none"}}>
                     <i className="fa fa-fw fa-user" />
                     <span className="item-list">Login</span>
                  </a>

                  <a href="signup" style={{display: "block", outline: "none"}}>
                     <i className="fa fa-fw fa-pencil" />
                     <span className="item-list">Sign Up</span>
                  </a>
               </Nav>
            </div>
         </div>
      );
   }
}