import React, { Component } from 'react';
import Some from './some';

class Main extends Component {
  render() {
    return (
      <div>
        <p> Printing the content of the Main component </p>
        <p> Adding a new line </p>
        <Some />
      </div>
    )
  }
}

export default Main;
