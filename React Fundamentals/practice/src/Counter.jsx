/* eslint-disable import/no-cycle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Themecontext } from './App';

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
      <Themecontext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.countChangeHandler(-1)}> - </button>
            <span> {this.state.count} </span>
            <button style={style} onClick={() => this.countChangeHandler(1)}> + </button>
          </div>
        )}
      </Themecontext.Consumer>
    );
  }
}
export default Counter;
