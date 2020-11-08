import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  render() {
    return (
      <div>
        <p>henlo</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(UnderstandingPage);
