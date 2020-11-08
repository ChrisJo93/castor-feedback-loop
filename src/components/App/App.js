import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import Header from '../header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Cleaning up app by making header a component */}
        <Header />
        <br />
        <div></div>
      </div>
    );
  }
}

export default App;
