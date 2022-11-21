/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Counter from './Counter';
import CounterFunctional from './CounterFunctional';

export const Themecontext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState('red');
  return (
    <Themecontext.Provider value={{ backgroundColor: theme }}>
      Class Based Component
      <Counter initialCount={0} />
      Functional Component
      <CounterFunctional initialCount={0} />
      <button onClick={() => setTheme((prevTheme) => (prevTheme === 'red' ? 'blue' : 'red'))}>Toggle Theme</button>
    </Themecontext.Provider>
  );
};

export default App;
