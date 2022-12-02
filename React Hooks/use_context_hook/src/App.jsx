import React from "react";
import ClassContext from "./ClassContext";
import FunctionContext from "./FunctionContext";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContext />
        <ClassContext />
      </ThemeProvider>
    </>
  );
}

export default App;
