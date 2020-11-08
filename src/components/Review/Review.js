import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  // need to set state for a new feedback entry

  // need post route here

  // will need to make routes in server to database

  render() {
    return (
      <div>
        <p>Feelings: {this.props.store.feelsReducer}</p>
        <p>Understanding: {this.props.store.underReducer}</p>
        <p>Support: {this.props.store.supportReducer}</p>
        <p>Comments: {this.props.store.commentReducer}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
