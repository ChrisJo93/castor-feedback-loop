import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitPage extends Component {
  startOver = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Nice, thank you for your FeedBack!</h1>
        <button onClick={this.startOver}>Return</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SubmitPage);
