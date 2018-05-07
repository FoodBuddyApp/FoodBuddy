import React, {Component} from 'react';
import {
   Alert, Button, FormGroup, InputGroup, FormControl, Glyphicon
} from 'react-bootstrap';

import './Signup.css';
import { signup } from '../../api';

export default class Signup extends Component {
   constructor(props) {
      super(props);

      this.state = {
         username: "",
         password: "",
         verifyPassword: "",
         error: null
      };

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      let newState = {error: null};
      newState[event.target.name] = event.target.value;

      this.setState({...newState});
   }

   signup() {
      console.log(this.props);
      signup({userName: this.state.username, password: this.state.password})
         .then(res => {
            console.log(res);
            if(res.status !== "ok") {
               this.setState({error: res.message});
            } else {
               this.props.history.push('/');
            }
         })
   }

   render() {
      // console.log(this.state);
      return (
         <div className="small-centered-div" style={{width: "400px"}}>
            <div className="icon">
               <i className="fa fa-user-plus"></i> 
            </div>
            <h1>Signup</h1>
            <FormGroup>
               <InputGroup>
                  <InputGroup.Addon>
                     <i className="fa fa-fw fa-user" />
                  </InputGroup.Addon>
                  <FormControl 
                     type="text"
                     name="username"
                     value={this.state.username}
                     placeholder="Enter a username"
                     onChange={this.handleChange}
                  />
               </InputGroup>

               <InputGroup>
                  <InputGroup.Addon>
                     <i className="fa fa-fw fa-unlock-alt" />
                  </InputGroup.Addon>
                  <FormControl 
                     type="password"
                     name="password"
                     value={this.state.password}
                     placeholder="Enter a password"
                     onChange={this.handleChange}
                  />
               </InputGroup>

               <InputGroup>
                  <InputGroup.Addon>
                     <i className="fa fa-fw fa-unlock-alt" />
                  </InputGroup.Addon>
                  <FormControl 
                     type="password"
                     name="verifyPassword"
                     value={this.state.verifyPassword}
                     placeholder="Verify password"
                     onChange={this.handleChange}
                  />
               </InputGroup>
            </FormGroup>

            <Button
               bsStyle="success"
               block
               disabled={this.state.password.length == 0 || this.state.password != this.state.verifyPassword}
               onClick={() => this.signup()}
            >
               Signup
            </Button>

            {this.state.error != null ? <p style={{marginTop: "15px", color: "red"}}>{this.state.error}</p> : null}
         </div>
      );
   }
}