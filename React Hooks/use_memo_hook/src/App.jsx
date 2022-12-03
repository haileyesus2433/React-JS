import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  const slowFunction = (number) => {
    for (let i = 0; i < 200000000; i++) {}
    return number * 2;
  };

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark((previousTheme) => !previousTheme)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

export default App;
