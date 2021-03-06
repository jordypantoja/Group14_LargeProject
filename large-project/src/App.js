import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import About from "./Pages/Dashboard/About";
import Contact from "./Pages/Dashboard/Contact";

class App extends Component {
  render() {
    return(
      < BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

