import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    form: '',
  };

  updateFeels = (event) => {
    this.setState({
      form: event.target.value, //updates form to input data
    });
  };

  submitFeels = (event) => {
    this.props.dispatch({ type: 'ADD_FEELS', payload: this.state.form }); //captures input data and sends to redux store
    this.setState({
      form: '', //clears input field by resetting state
    });
    this.props.history.push('/understanding'); //turns the page
  };

  render() {
    return (
      <div>
        <header>
          <h2>How Are you Feeling?</h2>
        </header>
        <div>
          <input
            type="number"
            placeholder="Enter a number"
            onChange={this.updateFeels}
            value={this.state.form}
          />
          <button onClick={this.submitFeels}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
