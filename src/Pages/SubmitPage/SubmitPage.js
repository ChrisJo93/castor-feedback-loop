import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitPage extends Component {
  startOver = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h6>konichiwa</h6>
        <button onClick={this.startOver}>Done</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SubmitPage);
