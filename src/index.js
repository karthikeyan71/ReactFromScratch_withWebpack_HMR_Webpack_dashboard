import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

// console.log(typeof(App));

// asdsadadsd

ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot) {
  module.hot.accept('./app', function() {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
