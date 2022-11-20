/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  countChangeHandler(amount) {
    this.setState((prevState) => ({ count: prevState.count + amount }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.countChangeHandler(-1)}> - </button>
        <span> {this.state.count} </span>
        <button onClick={() => this.countChangeHandler(1)}> + </button>
      </div>
    );
  }
}
export default Counter;
