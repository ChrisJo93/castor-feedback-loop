import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomePage extends Component {
  toFeeling = (event) => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div>
        <button onClick={this.toFeeling}>Click Here for FeedBack Form!</button>
      </div>
    );
  }
}

export default withRouter(HomePage);
