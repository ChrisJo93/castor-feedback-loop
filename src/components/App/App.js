import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import Header from '../Header/header';
import FeelingPage from '../../Pages/Feeling/FeelingPage';
import HomePage from '../../Pages/Home/HomePage';
import UnderstandingPage from '../../Pages/Understanding/UnderstandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <nav>
            <button>
              <Link to="/">Home</Link>
            </button>
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
          <br />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
