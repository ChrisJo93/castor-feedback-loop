import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  state = {
    form: '',
  };

  updateFeels = (event) => {
    console.log(this.props.store.feelsReducer);
    this.setState({
      form: event.target.value,
    });
  };

  submitFeels = (event) => {
    this.props.dispatch({ type: 'ADD_FEELS', payload: this.state.form });
    this.postFeels(this.state.form);
    this.setState({
      form: '',
    });
    console.log(this.state.form);
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
