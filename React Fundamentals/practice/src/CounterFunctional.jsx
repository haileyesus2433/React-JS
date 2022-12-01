/* eslint-disable import/no-cycle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useContext } from 'react';
import { Themecontext } from './App';

const CounterFunctional = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const style = useContext(Themecontext);
  return (
    <div>
      <button style={style} onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
      <span> {count} </span>
      <button style={style} onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>
    </div>
  );
};

export default CounterFunctional;
