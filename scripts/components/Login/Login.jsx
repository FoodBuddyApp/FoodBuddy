import React, {Component} from 'react';
import {
   Alert, Button, FormGroup, InputGroup, FormControl, Glyphicon
} from 'react-bootstrap';

import '../Signup/Signup.css';
import { login } from '../../api';

export default class Login extends Component {
   constructor(props) {
      super(props);

      this.state = {
         username: "",
         password: "",
         error: null
      };

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      let newState = {error: null};
      newState[event.target.name] = event.target.value;

      this.setState({...newState});
   }

   login() {
      console.log(this.props);
      login({userName: this.state.username, password: this.state.password})
         .then(res => {
            console.log(res);
            if(!res.auth) {
               this.setState({error: res.message});
            } else {
               this.props.authenticateUser(res.token);
               this.props.history.push('/');
            }
         })
   }

   render() {
      // console.log(this.state);
      return (
         <div className="small-centered-div" style={{width: "400px"}}>
            <div className="icon">
               <i className="fa fa-sign-in"></i> 
            </div>
            <h1>Login</h1>
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
            </FormGroup>

            <Button
               bsStyle="success"
               block
               disabled={this.state.password.length == 0 || this.state.password.length == 0}
               onClick={() => this.login()}
            >
               Login
            </Button>

            {this.state.error != null ? <p style={{marginTop: "15px", color: "red"}}>{this.state.error}</p> : null}
         </div>
      );
   }
}