import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My Name Is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}

export default App;
