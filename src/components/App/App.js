import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import Header from '../header/header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Cleaning up app by making header a component */}
          <Header />
          <nav>
            <button>
              <Link to="/feeling">How Do you Feel?</Link>
            </button>
            <button>
              <Link to="/understanding">Understand the Material?</Link>
            </button>
            <button>
              <Link to="/support">Feel Supported?</Link>
            </button>
            <button>
              <Link to="/comments">Leave a Comment</Link>
            </button>
          </nav>

          {/* <Router exact path="/feeling" component={Feeling} /> */}
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
