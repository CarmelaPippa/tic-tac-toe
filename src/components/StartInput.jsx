import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function StartInput() {
  const [inputValue, setinputValue] = useState("");

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      ></input>
      <button>Start</button>
    </div>
  );
}
