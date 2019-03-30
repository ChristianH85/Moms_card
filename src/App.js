import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,  } from "react-router-dom";
import Landing from './pages/Landing'
import Justin from './pages/Justin'
import Renee from './pages/Renee'
import Christian from './pages/Christian'
import Nav from './pages/Nav.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
        <Nav/>
        <Route path="/" exact component={Landing} />
        <Route path="/Renee" exact component={Renee} />
        <Route path="/Christian" exact component={Christian} />
        <Route path="/Justin" exact component={Justin} />
        </Router> 
      </div>
    );
  }
}
export default App;
