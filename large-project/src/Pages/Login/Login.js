import React, { Component } from 'react';
import './Login.css';
import logo from './../../Resources/logo.png';
//import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = { isLoginOpen: true, isRegisterOpen: false };
    }

    showLoginBox() {
      this.setState({isLoginOpen: true, isRegisterOpen: false});
    }

    showRegisterBox() {
      this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    render() {
      return (
        <div className="page">
        <div className="root-container">
            <div className="box-slider">
  
            <div className="slider" onClick={this.showLoginBox.bind(this)}>
              Login
            </div>
            <div className="slider" onClick={this.showRegisterBox.bind(this)}>
              Register
            </div>
  
        {/*         
            <button type="button" className="slider" onClick={this.showLoginBox.bind(this)}>Login</button>
            <button type="button" className="slider" onClick={this.showRegisterBox.bind(this)}>Register</button>
             */}
          </div>
  
          <div className="box-container">
  
            {this.state.isLoginOpen && <LoginBox />}
  
          </div>
        </div>
        </div>
      );
    }
}
  
class LoginBox extends Component {
    constructor(props) {
      super(props);
      this.state = {  };
    }
  
    submitLogin(e) {
  
    }
  
    render() {
      return(
      <div className="inner-container">
  
        <img src={logo} className="Logo" />
  
        <div className="title">
              Login  
        </div>
        <div className="box">
  
          <div className="input-group">
            <label className="login-label">E-Mail Address:</label>
            <input type="email" name="e-mail" className="login-input" placeholder="E-Mail Address"/>
          </div>
  
          <div className="input-group">
            <label className="login-label">Password:</label>
            <input type="password" name="password" className="register-input" placeholder="Password"/>
          </div>
  
          <button type="button" className="login-button" onClick={this.submitLogin.bind(this)}>LOGIN</button>
        
          <div className="seperator"> or </div>
  
          <button type="button" className="register-button" onClick={this.submitLogin.bind(this)}>REGISTER</button>
  
        </div>      
      </div>
      );
    }
}

export default Login;