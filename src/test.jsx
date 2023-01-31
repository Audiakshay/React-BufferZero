import React, { Component } from 'react';

export default class Test extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState({ count: 5 });
          }}
        >
          +
        </button>
        <p>{count}</p>
      </div>
    );
  }
}
