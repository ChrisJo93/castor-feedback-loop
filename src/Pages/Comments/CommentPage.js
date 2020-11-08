import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentPage extends Component {
  state = {
    comment: '',
  };

  submitComment = (event) => {
    this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.comment });
    this.setState({
      comment: '',
    });
  };

  updateComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <header>
          <h2>Please Leave a Comment Or Question</h2>
        </header>
        <div>
          <input
            type="text"
            placeholder="Leave a Comment"
            onChange={this.updateComment}
            value={this.state.comment}
          />
          <button onClick={this.submitComment}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(CommentPage);
