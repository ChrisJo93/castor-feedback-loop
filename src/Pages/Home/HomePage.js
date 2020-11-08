import React, { Component } from 'react';

class HomePage extends Component {
  toFeeling = (event) => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div>
        <p>Welcome to the Feedback Form!</p>
        <p>
          We ask for feedback in an effort to better tailor our service to your
          needs.
        </p>
        <p>
          If we don't know there's a problem, we can't offer a solution. Please
          feel free to leave a question in the comments section for followup.
        </p>
        <button onClick={this.toFeeling}>Start FeedBack!</button>
      </div>
    );
  }
}

export default HomePage;
