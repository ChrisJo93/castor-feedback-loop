import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  state = {
    support: '',
  };

  submitSupport = (event) => {
    if (this.state.support === '') {
      alert('You must provide an answer'); //form validation
    } else {
      this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
      this.setState({
        support: '',
      });
    }
    this.props.history.push('/comments');
  };

  updateSupport = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <header>
          <h2>How Well Are You Being Supported By Staff?</h2>
        </header>
        <div>
          <input
            type="number"
            placeholder="Enter a number"
            onChange={this.updateSupport}
            value={this.state.support}
          />
          <button onClick={this.submitSupport}>Submit</button>
        </div>
        <p>Page 3 of 4</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SupportPage);
