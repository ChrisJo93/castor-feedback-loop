import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    feels: '',
  };

  submitFeels = (event) => {
    if (this.state.feels === '') {
      alert('Please Answer T.T');
    } else {
      this.props.dispatch({ type: 'ADD_FEELS', payload: this.state.feels }); //captures input data and sends to redux store
      this.setState({
        feels: '', //clears input field by resetting state
      });
      this.props.history.push('/understanding'); //turns the page
    }
  };

  updateFeels = (event) => {
    this.setState({
      feels: event.target.value, //updates form to input data
    });
  };

  render() {
    return (
      <div>
        <header>
          <h2>How Are You Feeling?</h2>
        </header>
        <div>
          <input
            type="number"
            placeholder="Enter a number"
            onChange={this.updateFeels}
            value={this.state.feels}
          />
          <button onClick={this.submitFeels}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
