import React, { Component } from 'react';

class Some extends Component {

  state = {
    some: [1,2,3,4,5,6,7,8,9,10,11,15],
  };

  render() {

  const { some } = this.state;

  const printer = some.map(a=>(<li key={a}>{a}</li>));

    return (
      <div>
        <p> Printing the Some Component data  </p>
        <p> One more line is added  </p>
        { printer }
      </div>
    );
  }
}

export default Some;
