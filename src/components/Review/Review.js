import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Review extends Component {
  state = {
    newFeedBack: {
      feels: this.props.store.feelsReducer,
      under: this.props.store.underReducer,
      support: this.props.store.supportReducer,
      comments: this.props.store.commentReducer,
      flagged: false,
    },
  };
  // need to set state for a new feedback entry

  // need post route here

  // will need to make routes in server to database

  getFeedBack() {
    Axios.get('/submit')
      .then((response) => {
        this.props.dispatch({
          type: 'GET_FEEDBACK',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // surface message to user
        alert('Something went terribly wrong.');
      });
  }

  postFeedBack(feedBack) {
    Axios.post('/submit', feedBack)
      .then((response) => {
        this.getFeedBack();
        console.log('in client post', response);
      })
      .catch((err) => {
        console.log(err);
        alert('Your feedback was not saved!');
      });
  }

  submitReview = () => {
    this.postFeedBack(this.state.newFeedBack);
    this.props.history.push('/submit');
  };

  render() {
    return (
      <div>
        <p>Feelings: {this.state.newFeedBack.feels}</p>
        <p>Understanding: {this.state.newFeedBack.under}</p>
        <p>Support: {this.state.newFeedBack.support}</p>
        <p>Comments: {this.state.newFeedBack.comments}</p>
        <button onClick={this.submitReview}>Submit!</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
