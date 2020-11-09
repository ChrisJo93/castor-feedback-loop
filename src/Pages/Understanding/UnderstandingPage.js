import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  state = {
    under: '',
  };

  submitUnder = (event) => {
    if (this.state.under === '') {
      alert('Please Provide Answer');
    } else {
      this.props.dispatch({ type: 'ADD_UNDER', payload: this.state.under });
      this.setState({
        under: '',
      });
      this.props.history.push('/support');
    }
  };

  updateUnder = (event) =>
    this.setState({
      under: event.target.value,
    });

  render() {
    return (
      <div>
        <header>
          <h2>How Well Are You Grasping The Material?</h2>
        </header>
        <div>
          <input
            type="number"
            placeholder="Enter a number 1-5"
            onChange={this.updateUnder}
            value={this.state.under}
          />
          <button onClick={this.submitUnder}>Submit</button>
        </div>
        <p>Page 2 of 4</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(UnderstandingPage);
