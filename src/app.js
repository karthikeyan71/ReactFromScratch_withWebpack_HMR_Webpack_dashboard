import React, { Component } from 'react';
import './app.scss';
import {hot} from "react-hot-loader";
import Main from './main';


class App extends Component {
  render() {
      return (
        <div className="main-container">
          <p> Rendering the Main component </p>
          <Main />
        </div>
      );
  }
}

export default App;

// export default hot(module)(App);
