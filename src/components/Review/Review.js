import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Review extends Component {
  state = {
    newFeedBack: {
      feels: this.props.store.feelsReducer,
      under: this.props.store.underReducer,
      support: this.props.store.supportReducer,
      comment: this.props.store.commentReducer,
      flagged: false,
    },
  };
  // need to set state for a new feedback entry

  // need post route here

  // will need to make routes in server to database

  postFeedBack(feedBack) {
    Axios.post('/submit', feedBack)
      .then((response) => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
        alert('Your feedback was not saved!');
      });
  }

  submitReview = () => {
    this.props.history.push('/submit');
    this.postFeedBack(this.state.newFeedBack);
  };

  render() {
    return (
      <div>
        <p>Feelings: {this.state.newFeedBack.feels}</p>
        <p>Understanding: {this.state.newFeedBack.under}</p>
        <p>Support: {this.state.newFeedBack.support}</p>
        <p>Comments: {this.state.newFeedBack.comment}</p>
        <button onClick={this.submitReview}>Submit!</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
