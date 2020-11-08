import React, { Component } from 'react';

class Header extends Component {
  render() {
    //cleaning up app by making header a component

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>

          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
      </div>
    );
  }
}

export default Header;
