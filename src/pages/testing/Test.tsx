import React from "react";
import { useState } from "react";
import "./Test.scss";

const Test = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("time");

  if (count > 1) {
    nameChange();
  }

  function nameChange() {
    setName("times");
  }

  return (
    <div className="main">
      <h1>
        you have clicked {count} {name}
      </h1>
      <button onClick={() => setCount(count + 1)}>plus one</button>
    </div>
  );
};

export default Test;
