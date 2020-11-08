import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  state = {
    feels: this.props.store.feelsReducer,
    under: this.props.store.underReducer,
    support: this.props.store.supportReducer,
    comment: this.props.store.commentReducer,
  };
  // need to set state for a new feedback entry

  // need post route here

  // will need to make routes in server to database

  resetReducers = () => {
    this.props.dispatch({ type: 'RESET_STATE', payload: ['Success'] });
  };

  render() {
    return (
      <div>
        <p>Feelings: {this.state.feels}</p>
        <p>Understanding: {this.state.under}</p>
        <p>Support: {this.state.support}</p>
        <p>Comments: {this.state.comment}</p>
        <button onClick={this.resetReducers}>Reset</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
