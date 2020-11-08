import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  state = {
    support: '',
  };

  submitSupport = (event) => {
    console.log(this.state.support);
    this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
    this.setState({
      support: '',
    });
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
            value={this.state.Support}
          />
          <button onClick={this.submitSupport}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SupportPage);
