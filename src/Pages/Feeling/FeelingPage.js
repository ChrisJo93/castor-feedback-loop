import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>How Are you Feeling?</h2>
        </header>
        <div>
          <input type="number" placeholder="Enter a number" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
