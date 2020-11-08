import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
  render() {
    return (
      <div>
        <p>testing</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Test);
